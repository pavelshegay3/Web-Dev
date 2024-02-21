import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  productList = [
    {
      name: "Мышь Logitech G102 Lightsync черный",
      description: "тип сенсора: оптическая светодиодная<br>тип подключения: проводная<br>интерфейс: USB<br>дизайн: для правой руки<br>игровая: Да<br>разрешение оптического сенсора: 8000.0 dpi<br>количество программируемых клавиш: 6",
      rating: 4.8,
      link: "https://kaspi.kz/shop/p/logitech-g102-lightsync-chernyi-100956618/?c=750000000",
      image: "assets/photos/mouse.jpg"
    },
    {
      name: "Wi-Fi роутер TP-LINK Archer C80",
      description: "тип: Wi-Fi роутер<br>максимальная скорость беспроводного соединения: 1900.0 Мбит/с<br>стандарты Wi-Fi: Wi-Fi 4 (802.11n), ,Wi-Fi 5 (802.11ac)<br>количество LAN портов: 4<br>диапазоны частот: 2.4 ГГц, ,5 ГГц",
      rating: 4.9,
      link: "https://kaspi.kz/shop/p/wi-fi-router-tp-link-archer-c80-100663389/?c=750000000",
      image: "assets/photos/router.jpg"
    },
    {
      name: "SSD Kingston SA400S37 480 ГБ",
      description: "тип: SSD форм-фактор: 2.5<br>емкость: 480.0 Гб<br>интерфейсы: SATA<br>скорость чтения: 500.0 МБ/с<br>скорость записи: 450.0 МБ/с",
      rating: 4.6,
      link: "https://kaspi.kz/shop/p/ssd-kingston-sa400s37-480-gb-6800659/?c=750000000",
      image: "assets/photos/ssd.jpg"
    },
    {
      name: "Процессор Intel Core i3 12100F OEM",
      description: "тип процессора: Core i3<br>сокет: LGA1700<br>базовая частота процессора: 3300.0 МГц<br>максимальная частота процессора: 4300.0 МГц<br>тип поставки: OEM<br>количество ядер: 4",
      rating: 4.8,
      link: "https://kaspi.kz/shop/p/intel-core-i3-12100f-oem-103650823/?c=750000000",
      image: "assets/photos/cpu.jpg"
    },
    {
      name: "Сетевая карта Tenda E33",
      description: "интерфейс: PCI-E<br>скорость передачи данных: 500 Мбит/сек<br>количество разъемов RJ-45: нет",
      rating: 5,
      link: "https://kaspi.kz/shop/p/tenda-e33-112973232/?c=750000000",
      image: "assets/photos/wifiadapter.jpg"
    },
    {
      name: "Материнская плата ASRock B660M-HDV",
      description: "форм-фактор: microATX<br>сокет: LGA1700<br>чипсет: Intel B660<br>тип памяти: DDR4 DIMM<br>количество слотов памяти: 2",
      rating: 5,
      link: "https://kaspi.kz/shop/p/asrock-b660m-hdv-103698069/?c=750000000",
      image: "assets/photos/mobo.jpg"
    },
    {
      name: "Видеокарта PowerColor AMD Radeon RX 6600 Fighter AXRX 6600 8GBD6-3DH 8 ГБ",
      description: "серия: Radeon 6000 Series<br>частота графического процессора: 2491 МГц<br>объем видеопамяти: 8.0 Гб<br>тип видеопамяти: GDDR6<br>длина видеокарты: 205.0 мм<br>рекомендуемая мощность блока питания: 500.0 Вт",
      rating: 5,
      link: "https://kaspi.kz/shop/p/powercolor-amd-radeon-rx-6600-fighter-axrx-6600-8gbd6-3dh-8-gb-104163740/?c=750000000",
      image: "assets/photos/gpu.jpg"
    },
    {
      name: "SSD Kingston SNV2S/1000G 1000 Гб",
      description: "тип: SSD форм-фактор: M.2<br>eмкость: 1000.0 Гб<br>интерфейсы: NVMe, ,PCI-Express 4.0<br>скорость чтения: 3500.0 МБ/с<br>скорость записи: 2100.0 МБ/с",
      rating: 4.7,
      link: "https://kaspi.kz/shop/p/ssd-kingston-snv2s-1000g-1000-gb-107232387/?c=750000000",
      image: "assets/photos/ssd2.jpg"
    },
    {
      name: "",
      description: "",
      rating: 5,
      link: "",
      image: "assets/photos/"
    },
    {
      name: "",
      description: "",
      rating: 5,
      link: "",
      image: "assets/photos/"
    },
    
  ];
  shareProduct(product: any){
    const shareUrl = `https://t.me/share/url?url=${encodeURIComponent(product.link)}`;
    window.open(shareUrl, '_blank');
  }
}
