import { Component, signal } from '@angular/core'; // Angular'dan Component ve signal API'sini alıyoruz.
import { FormsModule } from '@angular/forms'; // Template'te ngModel kullanabilmek için FormsModule ekliyoruz.

export class userModel{ // Kullanıcı bilgisini taşımak için model sınıfı.
  name:string=""; // Kullanıcının adı (başlangıçta boş).
  age:number=0; // Kullanıcının yaşı (başlangıçta 0).
  email:string=""; // Kullanıcının e-postası (başlangıçta boş).
}

@Component({ // App sınıfını Angular bileşeni olarak tanımlıyoruz.
  selector: 'app-root', // HTML içinde bu bileşen <app-root> etiketiyle çağrılır.
  imports: [FormsModule], // Bu bileşende kullanılacak importları tanımlıyoruz.
  template:` // Bileşenin görünümünü inline template olarak yazıyoruz.
  <input [(ngModel)]="name"> <!-- name sinyaline iki yönlü bağlanır. -->
  <input [(ngModel)]="user().name"> <!-- user sinyalinin name alanına bağlanır. -->
  <p>{{name()}}</p> <!-- name sinyalinin güncel değerini gösterir. -->
  <p>{{user().name}}</p> <!-- user içindeki name değerini gösterir. -->
  <ul> <!-- Kullanıcı listesini göstereceğimiz alan. -->
    @for(val of users();track val){ <!-- users dizisini dönüp her elemanı işleriz. -->
      <li>{{val.name}} - {{val.age}} - {{val.email}}</li> <!-- Her kullanıcı bilgisini satırda gösterir. -->
    }
  </ul>
  `,
})

export  class App { // Uygulamanın ana bileşen sınıfı.
  readonly name = signal<string>("default değer"); // String tipinde bir signal.
  readonly user = signal<userModel>(new userModel()); // Tek kullanıcı tutan signal.
  readonly users = signal<userModel[]>([]); // Kullanıcı listesi tutan signal.
  constructor(){ // Bileşen oluşturulunca ilk çalışan yer.
    this.name.set("Ahmet"); // name değerini doğrudan Ahmet yapar.
    this.name.update(prev=>prev.toUpperCase()); // name değerini büyük harfe çevirir.

    this.user.set({name:"Ahmet",age:30,email:"ahmet@example.com"}); // user sinyaline nesne literal atar.
    const userVariable=new userModel(); // Yeni bir userModel örneği oluşturur.
    userVariable.name="Mehmet"; // name alanını doldurur.
    userVariable.age=25; // age alanını doldurur.
    userVariable.email="mehmet@example.com"; // email alanını doldurur.
    this.user.set(userVariable); // Hazırlanan nesneyi user sinyaline yazar.

    this.user.update(prev=>({...prev,name:"Ayşe",age:28,email:"ayse@example.com"})); // Mevcut user verisini günceller.
    
    this.users.set([{name:"Ahmet",age:30,email:"ahmet@example.com"},{name:"Mehmet",age:25,email:"mehmet@example.com"},{name:"Ayşe",age:28,email:"ayse@example.com"}]); // users listesine toplu veri atar.
  }

}
