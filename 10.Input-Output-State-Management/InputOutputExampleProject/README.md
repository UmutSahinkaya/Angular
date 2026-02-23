# Input / Output — Calisan Kayit Uygulamasi

Bu proje, Angular 21 ile **parent-child component iletisimini** (`@Input` ve `@Output`) ogretmek icin tasarlanmis somut bir calismadir. Senaryo: Bir form bileseni calisani kaydeder ve parent component bu veriyi alip listeye ekler.

---

## Senaryo

- `EmployeeCreate` bileseni: Form ic tutaral, kaydet butonuna basilinca calisani `EventEmitter` ile yukari gonderir.
- `Employees` bileseni: Parent'tan `@Input()` ile gelen calisan dizisini listeler.
- `App` (parent): Iki alt bileseni birlestirir, `EmployeeCreate`'ten gelen события kaydeder ve `Employees`'a iletir.

---

## Proje Yapisi

```
src/app/
  employee-create/
    employee-create.ts   // @Output ile calisan gonderir
    employee-create.html // Form template
    employee-create.css
  employees/
    employees.ts         // @Input ile calisan listesi alir
    employees.html       // Liste template
    employees.css
  app.ts                 // Parent: iki bileseni baglayan koordinator
```

---

## Temel Kavramlar ve Kod

### 1) Calisan Modeli

```ts
export class Employee {
  name: string = '';
  surname: string = '';
  dateOfBirth: string = '';
}
```

### 2) `@Output` — Alt Bilesen Veri Gonderir

`EmployeeCreate` bileseni formu yonetir. Kaydet butonuna basilinca `EventEmitter` ile parent'a bir `Employee` nesnesi gonderir:

```ts
@Component({ selector: 'app-employee-create', ... })
export class EmployeeCreate {
  employee = new Employee();

  @Output() myEvent = new EventEmitter<Employee>();

  save() {
    this.myEvent.emit(this.employee);  // Parent'a gonder
    this.employee = new Employee();   // Formu sifirla
  }
}
```

### 3) `@Input` — Alt Bilesen Veri Alir

`Employees` bileseni parent'tan calisan listesini alir:

```ts
@Component({ selector: 'app-employees', ... })
export class Employees {
  @Input() employes: Employee[] = [];
}
```

### 4) Parent — Iki Bileseni Baglar

`App` bileseni hem event dinler hem de listeyi iletir:

```ts
@Component({
  imports: [Employees, EmployeeCreate],
  template: `
    <app-employee-create (myEvent)="save($event)" />
    <hr />
    <app-employees [employes]="employees" />
  `,
})
export class App {
  employee = new Employee();
  employees: Employee[] = [];

  save(event: any) {
    this.employee = event;
    this.employees.push({...event});   // Spread: referansi kirmak icin
  }
}
```

> `{...event}` spread kullanimi kritik: `push(event)` yapilsaydi, `employee-create`'in ayni nesneyi `reset` etmesi listedeki kaydi da bozardi.

---

## Veri Akis Diyagrami

```
App (parent)
  |-- [employes]="employees" --> Employees (child)     // Asagi veri: @Input
  |-- (myEvent)="save($event)" <-- EmployeeCreate (child) // Yukari veri: @Output
```

---

## Calistirma

```bash
cd 10.Input-Output-State-Management/InputOutputExampleProject
npm install
npm start
```

Tarayici: `http://localhost:4200/`

---

## Ogrenim Notlari

- `@Input()` ile parent'tan child'a veri aktarilir (tek yon: asagi).
- `@Output()` ile child'dan parent'a olay (event) firlatilir (yukari).
- `EventEmitter<T>` jenerik yapi kullanir; tip belirtmek type-safe kullanim saglar.
- `{...event}` spread kullanimi ile nesne referansi yeni bir kopya olusturulur; bu sayede form sifirlaninca liste bozulmaz.
- Bu pattern servis kullanimi gerekmeden kucuk component agaclari icin yeterlidir; buyuk uygulamalarda Signal veya Service tabanli state yonetimine gecilir.

---

## Bagli Dokumanlar

- Input/Output + State: [../InputOutputStateManagement/README.md](../InputOutputStateManagement/README.md)
- Service ile State: [../StateManagementWithServices/README.md](../StateManagementWithServices/README.md)
- Ana repo: [../../README.md](../../README.md)
