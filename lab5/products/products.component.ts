import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  categories = [
    {
      name: 'Motherboards',
      products: [
        {
          name: "Материнская плата ASRock B660M-HDV",
          description: "форм-фактор: microATX<br>сокет: LGA1700<br>чипсет: Intel B660<br>тип памяти: DDR4 DIMM<br>количество слотов памяти: 2",
          rating: 5,
          link: "https://kaspi.kz/shop/p/asrock-b660m-hdv-103698069/?c=750000000",
          likes: 0,
          image: "assets/photos/mobo.jpg"
        }
      ]
    },
    {
      name: 'Mouses',
      products: [
        {
          name: "Мышь Logitech G102 Lightsync черный",
          description: "тип сенсора: оптическая светодиодная<br>тип подключения: проводная<br>интерфейс: USB<br>дизайн: для правой руки<br>игровая: Да<br>разрешение оптического сенсора: 8000.0 dpi<br>количество программируемых клавиш: 6",
          rating: 4.8,
          link: "https://kaspi.kz/shop/p/logitech-g102-lightsync-chernyi-100956618/?c=750000000",
          likes: 0,
          image: "assets/photos/mouse.jpg"
        },
      ]
    },
    {
      name: 'Storage',
      products: [
        {
          name: "SSD Kingston SA400S37 480 ГБ",
          description: "тип: SSD форм-фактор: 2.5<br>емкость: 480.0 Гб<br>интерфейсы: SATA<br>скорость чтения: 500.0 МБ/с<br>скорость записи: 450.0 МБ/с",
          rating: 4.6,
          link: "https://kaspi.kz/shop/p/ssd-kingston-sa400s37-480-gb-6800659/?c=750000000",
          likes: 0,
          image: "assets/photos/ssd.jpg"
        },
        {
          name: "SSD Kingston SNV2S/1000G 1000 Гб",
          description: "тип: SSD форм-фактор: M.2<br>eмкость: 1000.0 Гб<br>интерфейсы: NVMe, ,PCI-Express 4.0<br>скорость чтения: 3500.0 МБ/с<br>скорость записи: 2100.0 МБ/с",
          rating: 4.7,
          link: "https://kaspi.kz/shop/p/ssd-kingston-snv2s-1000g-1000-gb-107232387/?c=750000000",
          likes: 0,
          image: "assets/photos/ssd2.jpg"
        }
      ]
    },
    {
      name: "Processors",
      products: [
        {
          name: "Процессор Intel Core i3 12100F OEM",
          description: "тип процессора: Core i3<br>сокет: LGA1700<br>базовая частота процессора: 3300.0 МГц<br>максимальная частота процессора: 4300.0 МГц<br>тип поставки: OEM<br>количество ядер: 4",
          rating: 4.8,
          link: "https://kaspi.kz/shop/p/intel-core-i3-12100f-oem-103650823/?c=750000000",
          likes: 0,
          image: "assets/photos/cpu.jpg"
        }
      ]
    },
    {
      name: "Videocards",
      products: [
        {
          name: "Видеокарта PowerColor AMD Radeon RX 6600 Fighter AXRX 6600 8GBD6-3DH 8 ГБ",
          description: "серия: Radeon 6000 Series<br>частота графического процессора: 2491 МГц<br>объем видеопамяти: 8.0 Гб<br>тип видеопамяти: GDDR6<br>длина видеокарты: 205.0 мм<br>рекомендуемая мощность блока питания: 500.0 Вт",
          rating: 5,
          link: "https://kaspi.kz/shop/p/powercolor-amd-radeon-rx-6600-fighter-axrx-6600-8gbd6-3dh-8-gb-104163740/?c=750000000",
          likes: 0,
          image: "assets/photos/gpu.jpg"
        },
      ]
    }
  ];

  shareProduct(product: any){
    const shareUrl = `https://t.me/share/url?url=${encodeURIComponent(product.link)}`;
    window.open(shareUrl, '_blank');
  }

  selectedCategory: any = null;
  selectCategory(category: any) {
    this.selectedCategory = category;
  }
  removeProduct(product: any){

  }
  likeProduct(product: any){
    product.likes++;
  }
}
