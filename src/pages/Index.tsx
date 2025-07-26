import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('general');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const tableOfContents = [
    { id: 'general', title: 'Общие сведения' },
    { id: 'government', title: 'Государственное устройство' },
    { id: 'geography', title: 'География' },
    { id: 'history', title: 'История' },
    { id: 'economy', title: 'Экономика' },
    { id: 'military', title: 'Вооружённые силы' },
    { id: 'culture', title: 'Культура' },
    { id: 'social', title: 'Социальная сфера' }
  ];

  return (
    <div className="min-h-screen bg-white font-serif">
      {/* Header */}
      <div className="border-b border-gray-300 bg-white sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center gap-4">
            <Icon name="Book" size={24} className="text-gray-600" />
            <h1 className="text-xl font-bold text-black">Википедия</h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex">
        {/* Sidebar Navigation */}
        <div className="w-64 border-r border-gray-200 bg-gray-50 min-h-screen sticky top-16">
          <div className="p-4">
            <h3 className="font-bold text-sm mb-3 text-gray-700">Содержание</h3>
            <nav className="space-y-1">
              {tableOfContents.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left text-sm py-2 px-3 rounded hover:bg-gray-200 transition-colors ${
                    activeSection === item.id ? 'bg-blue-100 text-blue-700' : 'text-blue-600'
                  }`}
                >
                  {item.title}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 max-w-4xl">
          <div className="p-6">
            {/* Title */}
            <h1 className="text-4xl font-bold mb-2 border-b-4 border-gray-200 pb-2">
              Сашианийская Республика
            </h1>
            <p className="text-gray-600 mb-6 italic">
              Суверенное государство на северо-западе материка Альвания
            </p>

            {/* Info Card */}
            <div className="float-right ml-6 mb-6 w-80">
              <Card className="border border-gray-300">
                <div className="bg-gray-100 p-4 border-b">
                  <h3 className="font-bold text-center">Сашианийская Республика</h3>
                  <p className="text-sm text-center text-gray-600 italic">Sashianian Republic</p>
                </div>
                <div className="p-4">
                  {/* Flag */}
                  <div className="mb-4 text-center">
                    <img 
                      src="https://cdn.poehali.dev/files/047b7042-3ea5-4743-b34c-900d420bcbea.png" 
                      alt="Флаг Сашианийской Республики"
                      className="w-48 h-32 object-cover border border-gray-300 mx-auto"
                    />
                    <p className="text-xs text-gray-600 mt-1">Флаг Сашианийской Республики</p>
                  </div>
                  
                  {/* Quick Facts */}
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="font-semibold">Столица:</span>
                      <button 
                        onClick={() => scrollToSection('social')}
                        className="text-blue-600 hover:underline cursor-pointer"
                      >
                        Асхиния
                      </button>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold">Население:</span>
                      <span>23,8 млн</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold">Площадь:</span>
                      <span>92,400 км²</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold">Валюта:</span>
                      <span>Сашин (SHN)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold">Президент:</span>
                      <span>Карл Маркес</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold">Премьер:</span>
                      <span>Лилия Вест</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold">Независимость:</span>
                      <span>15 августа 1948</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Main Article Content */}
            <div className="text-gray-900 leading-relaxed">
              
              {/* General Information */}
              <section id="general" className="mb-8">
                <h2 className="text-2xl font-bold mb-4 border-b border-gray-300 pb-2">1. Общие сведения</h2>
                <p className="mb-4">
                  <strong>Сашианийская Республика</strong> — суверенное государство, расположенное на северо-западе материка Альвания. 
                  Это одна из наиболее развитых стран региона, известная высокими технологиями и динамичной экономикой.
                </p>
                
                <div className="grid grid-cols-2 gap-4 my-6">
                  <div>
                    <h4 className="font-bold mb-2">Основные данные:</h4>
                    <ul className="space-y-1 text-sm">
                      <li><strong>Полное название:</strong> Сашианийская Республика</li>
                      <li><strong>Форма правления:</strong> Президентская республика</li>
                      <li><strong>Государственный строй:</strong> Федерация</li>
                      <li><strong>Глава государства:</strong> Президент Карл Маркес</li>
                      <li><strong>Глава правительства:</strong> Премьер-министр Лилия Вест</li>
                      <li><strong>Столица:</strong> Асхиния</li>
                      <li><strong>Официальный язык:</strong> Сашианийский</li>
                      <li><strong>Валюта:</strong> Сашин (SHN)</li>
                      <li><strong>Часовой пояс:</strong> AST — UTC+3</li>
                      <li><strong>Площадь:</strong> ~92,400 км²</li>
                      <li><strong>Население:</strong> 23,8 млн (на 2025 год)</li>
                      <li><strong>Дата независимости:</strong> 15 августа 1948 года</li>
                      <li><strong>Названия жителей:</strong> сашианиец, сашианийка, сашианийцы</li>
                      <li><strong>Интернет-домен:</strong> .sh</li>
                      <li><strong>Код ISO:</strong> SH (двухбуквенный), SAH (трёхбуквенный)</li>
                      <li><strong>Код МОК:</strong> SAH</li>
                      <li><strong>Телефонный код:</strong> +47 (региональная зона Альвании)</li>
                      <li><strong>Автомобильное движение:</strong> правостороннее</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Экономические показатели:</h4>
                    <ul className="space-y-1 text-sm">
                      <li><strong>ВВП (номинальный):</strong> 1,2 трлн сашинов</li>
                      <li><strong>ВВП на душу населения:</strong> 50,400 сашинов</li>
                      <li><strong>Госбюджет (2025):</strong> 360 млрд сашинов</li>
                      <li><strong>Доля экспорта в ВВП:</strong> ~25%</li>
                      <li><strong>Рост ВВП:</strong> 4,8%</li>
                      <li><strong>Безработица:</strong> 3,1%</li>
                    </ul>
                  </div>
                </div>

                <p className="mb-4">
                  <strong>Девиз:</strong> "Слава Республике, Слава Сашиании!"<br/>
                  <strong>Гимн:</strong> "Слава Республике, Слава Сашиании!"<br/>
                  <strong>Названия жителей:</strong> сашианиец, сашианийка, сашианийцы
                </p>
              </section>

              {/* Government */}
              <section id="government" className="mb-8">
                <h2 className="text-2xl font-bold mb-4 border-b border-gray-300 pb-2">2. Государственное устройство</h2>
                <p className="mb-4">
                  Сашиания является федеративной президентской республикой с разделением властей на исполнительную, законодательную и судебную.
                </p>
                
                <h3 className="text-xl font-bold mb-3">Исполнительная власть</h3>
                <ul className="list-disc ml-6 mb-4">
                  <li><strong>Президент:</strong> Карл Маркес (избран в 2020 году). Выбирается на 5 лет, возглавляет армию и управляет внешней политикой.</li>
                  <li><strong>Премьер-министр:</strong> Лилия Вест. Формирует кабинет министров и руководит правительством.</li>
                </ul>

                <h3 className="text-xl font-bold mb-3">Законодательная власть</h3>
                <ul className="list-disc ml-6 mb-4">
                  <li><strong>Сенат (верхняя палата):</strong> Представители регионов</li>
                  <li><strong>Палата народных депутатов (нижняя палата):</strong> Выборы каждые 4 года</li>
                </ul>
              </section>

              {/* Geography */}
              <section id="geography" className="mb-8">
                <h2 className="text-2xl font-bold mb-4 border-b border-gray-300 pb-2">3. География</h2>
                
                <h3 className="text-xl font-bold mb-3">Расположение и границы</h3>
                <p className="mb-4">
                  Сашиания находится в умеренной зоне северного побережья Альвании. Граничит:
                </p>
                <ul className="list-disc ml-6 mb-4">
                  <li><strong>Север:</strong> Сашианийский океан</li>
                  <li><strong>Восток:</strong> Кусарийская Демократическая Республика (исторические споры за приграничные территории)</li>
                  <li><strong>Юг:</strong> Государство Кальвария (союзник в обороне и торговле)</li>
                  <li><strong>Запад:</strong> Королевство Вестмарк (торговые связи)</li>
                </ul>

                <h3 className="text-xl font-bold mb-3">Рельеф</h3>
                <ul className="list-disc ml-6 mb-4">
                  <li><strong>Север:</strong> холмистые плато, леса, океан и горы с развитой промышленностью</li>
                  <li><strong>Центр:</strong> равнины с развитой промышленностью</li>
                  <li><strong>Юг:</strong> долины и степи, где преобладает сельское хозяйство</li>
                </ul>

                <h3 className="text-xl font-bold mb-3">Климат</h3>
                <ul className="list-disc ml-6 mb-4">
                  <li><strong>Север:</strong> умеренно-океанический (влажные лета, мягкие зимы)</li>
                  <li><strong>Центр:</strong> умеренно-континентальный (тёплое лето, холодные зимы)</li>
                  <li><strong>Юг:</strong> субтропический (тёплые зимы, жаркое лето)</li>
                </ul>

                <p className="mb-4">
                  <strong>Основные водные объекты:</strong> Река Асхиния, озеро Велара, крупные водохранилища.
                </p>
              </section>

              {/* History */}
              <section id="history" className="mb-8">
                <h2 className="text-2xl font-bold mb-4 border-b border-gray-300 pb-2">4. История</h2>
                
                <h3 className="text-xl font-bold mb-3">Ранние эпохи</h3>
                <p className="mb-4">
                  Первые поселения на территории современной Сашиании возникли в III тысячелетии до н.э. 
                  К VI веку до н.э. сложились торговые города, которые стали основой будущей государственности.
                </p>

                <h3 className="text-xl font-bold mb-3">Средневековье</h3>
                <p className="mb-4">
                  X–XIII века отмечены периодом феодальных войн. В XIV веке образовалось два соперничающих государства: Сашия и Ания.
                </p>

                <h3 className="text-xl font-bold mb-3">Новое и новейшее время</h3>
                <p className="mb-4">
                  XIX век характеризовался колонизацией страной Ортании. 1948 год стал переломным — провозглашение независимости 
                  и объединение Сашии и Ании в единое государство.
                </p>
                <ul className="list-disc ml-6 mb-4">
                  <li><strong>Война за независимость (1947–1948):</strong> Сашия и Ания выиграли у Ортании контроль над ключевыми территориями и по договору объединились в единую Республику.</li>
                  <li><strong>Экономический бум (1960–1980):</strong> Инвестиции в IT, энергетику и сельское хозяйство сделали страну региональным лидером.</li>
                </ul>
              </section>

              {/* Economy */}
              <section id="economy" className="mb-8">
                <h2 className="text-2xl font-bold mb-4 border-b border-gray-300 pb-2">5. Экономика</h2>
                
                <h3 className="text-xl font-bold mb-3">Макроэкономические показатели</h3>
                <div className="overflow-x-auto mb-6">
                  <table className="min-w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2 text-left">Показатель</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Значение</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">ВВП (номинальный)</td>
                        <td className="border border-gray-300 px-4 py-2">1,2 трлн сашинов</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2">Рост ВВП</td>
                        <td className="border border-gray-300 px-4 py-2">4,8%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Безработица</td>
                        <td className="border border-gray-300 px-4 py-2">3,1%</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2">Инфляция</td>
                        <td className="border border-gray-300 px-4 py-2">2,8%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Экспорт</td>
                        <td className="border border-gray-300 px-4 py-2">300 млрд сашинов</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2">Импорт</td>
                        <td className="border border-gray-300 px-4 py-2">280 млрд сашинов</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-xl font-bold mb-3">Государственный бюджет (360 млрд сашинов)</h3>
                <div className="overflow-x-auto mb-6">
                  <table className="min-w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2 text-left">Сфера</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Расходы (млрд)</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">% бюджета</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Здравоохранение</td>
                        <td className="border border-gray-300 px-4 py-2">72</td>
                        <td className="border border-gray-300 px-4 py-2">20,0%</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2">Образование</td>
                        <td className="border border-gray-300 px-4 py-2">65</td>
                        <td className="border border-gray-300 px-4 py-2">18,0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Оборона</td>
                        <td className="border border-gray-300 px-4 py-2">55</td>
                        <td className="border border-gray-300 px-4 py-2">15,3%</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2">Наука и технологии</td>
                        <td className="border border-gray-300 px-4 py-2">54</td>
                        <td className="border border-gray-300 px-4 py-2">15,0%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Инфраструктура</td>
                        <td className="border border-gray-300 px-4 py-2">40</td>
                        <td className="border border-gray-300 px-4 py-2">11,1%</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2">Социальное обеспечение</td>
                        <td className="border border-gray-300 px-4 py-2">29</td>
                        <td className="border border-gray-300 px-4 py-2">8,1%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Экология</td>
                        <td className="border border-gray-300 px-4 py-2">18</td>
                        <td className="border border-gray-300 px-4 py-2">5,1%</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2">Культура</td>
                        <td className="border border-gray-300 px-4 py-2">11</td>
                        <td className="border border-gray-300 px-4 py-2">3,1%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Резервный фонд</td>
                        <td className="border border-gray-300 px-4 py-2">9</td>
                        <td className="border border-gray-300 px-4 py-2">2,5%</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2">Международные связи</td>
                        <td className="border border-gray-300 px-4 py-2">7</td>
                        <td className="border border-gray-300 px-4 py-2">1,9%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-xl font-bold mb-3">Основные отрасли экономики</h3>
                <ul className="list-disc ml-6 mb-4">
                  <li><strong>IT и электроника:</strong> программное обеспечение, чипы, телекоммуникации</li>
                  <li><strong>Сельское хозяйство:</strong> зерно, фрукты, виноград</li>
                  <li><strong>Машиностроение:</strong> робототехника, автомобили</li>
                  <li><strong>Энергетика:</strong> водоэнергетика, солнечные станции</li>
                </ul>

                <h3 className="text-xl font-bold mb-3">Внешняя торговля</h3>
                <p className="mb-4">
                  <strong>Экспорт:</strong> электроника, программное обеспечение, продовольствие, автомобили<br/>
                  <strong>Импорт:</strong> сырьё для промышленности, интеллектуальные услуги и ресурсы<br/>
                  <strong>Основные торговые партнёры:</strong> Ортания, Кальвария, Вестмарк
                </p>
              </section>

              {/* Military */}
              <section id="military" className="mb-8">
                <h2 className="text-2xl font-bold mb-4 border-b border-gray-300 pb-2">6. Вооружённые силы</h2>
                
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-bold mb-2">Общие данные:</h4>
                    <ul className="space-y-1 text-sm">
                      <li><strong>Военный бюджет:</strong> 55 млрд сашинов</li>
                      <li><strong>Численность:</strong> 120 тыс. человек</li>
                      <li><strong>Военный резерв:</strong> 250 тыс. человек</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">
                      Высокие расходы на оборону оправданы тем, что Кусария, хоть и бедная страна по сравнению 
                      с Сашианией, имеет очень развитый ВПК, что представляет угрозу для Республики.
                    </p>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3">Сухопутные войска</h3>
                <ul className="list-disc ml-6 mb-4">
                  <li><strong>Бронетехника:</strong> 300 танков, 800 БТР</li>
                  <li><strong>Артиллерия:</strong> 400 орудий, 150 РСЗО</li>
                </ul>

                <h3 className="text-xl font-bold mb-3">Военно-воздушные силы</h3>
                <ul className="list-disc ml-6 mb-4">
                  <li><strong>Истребители:</strong> 60 современных истребителей</li>
                  <li><strong>БПЛА:</strong> 300 единиц (разведка и ударные комплексы)</li>
                  <li><strong>Бомбардировщики:</strong> 18 единиц</li>
                  <li><strong>Транспортные самолёты:</strong> 12 единиц (десантирование, эвакуация, доставка грузов)</li>
                </ul>

                <h3 className="text-xl font-bold mb-3">Военно-морской флот</h3>
                <ul className="list-disc ml-6 mb-4">
                  <li><strong>Фрегаты:</strong> 10 единиц</li>
                  <li><strong>Противолодочные корабли:</strong> 7 единиц</li>
                  <li><strong>Подводные лодки:</strong> 3 единицы</li>
                  <li><strong>Ракетные катера:</strong> 16 единиц</li>
                </ul>
              </section>

              {/* Culture */}
              <section id="culture" className="mb-8">
                <h2 className="text-2xl font-bold mb-4 border-b border-gray-300 pb-2">7. Культура</h2>
                
                <p className="mb-4">
                  Бюджет на культуру составляет 11 млрд сашинов (3,1% госбюджета). Сашиания имеет богатое культурное наследие, 
                  включающее развитую сеть театров, музеев и киноиндустрию.
                </p>

                <h3 className="text-xl font-bold mb-3">Национальные праздники</h3>
                <ul className="list-disc ml-6 mb-4">
                  <li><strong>День Независимости:</strong> 15 августа (главный государственный праздник)</li>
                  <li><strong>Праздник Колоса:</strong> рождественский праздник, символизирующий плодородие и процветание</li>
                </ul>

                <h3 className="text-xl font-bold mb-3">Национальная символика</h3>
                <p className="mb-4">
                  <strong>Флаг:</strong> Вертикальные полосы белого, бордового и синего цветов. По центру — золотой герб: 
                  пшеничный колос с корнями, в нижней части колоса находится щит с изображением пучка трёх стрел.
                </p>
                <p className="mb-4">
                  <strong>Герб:</strong> Щит с изображением пшеничного колоса, символизирующего плодородие, 
                  и щит с изображением трёх стрел, означающий стойкость Сашиании, единство и прогресс.
                </p>
              </section>

              {/* Social */}
              <section id="social" className="mb-8">
                <h2 className="text-2xl font-bold mb-4 border-b border-gray-300 pb-2">8. Социальная сфера</h2>
                
                <h3 className="text-xl font-bold mb-3">Здравоохранение</h3>
                <p className="mb-4">
                  Бюджет: 72 млрд сашинов (20,0% госбюджета). Система смешанная: частные клиники и государственные поликлиники. 
                  Высокий уровень медицинских технологий.
                </p>

                <h3 className="text-xl font-bold mb-3">Образование</h3>
                <p className="mb-4">
                  Бюджет: 65 млрд сашинов (18,0% госбюджета). Развитая сеть школ и университетов, 
                  включая престижный Асхинийский технический университет.
                </p>

                <h3 className="text-xl font-bold mb-3">Инфраструктура</h3>
                <p className="mb-4">
                  Бюджет: 40 млрд сашинов (11,1% госбюджета). Развитая сеть шоссе, скоростные железные дороги, 
                  международный аэропорт «Асхиния».
                </p>

                <h3 className="text-xl font-bold mb-3">Космическая программа</h3>
                <p className="mb-4">
                  Бюджет: 21,6 млрд сашинов (около 40% из бюджета науки и технологий). 
                  20 спутников (наблюдение, связь), космодром «Астория-1».
                </p>

                <h3 className="text-xl font-bold mb-3">Административное деление</h3>
                <p className="mb-4">Сашиания разделена на 5 провинций и 2 столичных округа:</p>
                <div className="overflow-x-auto mb-6">
                  <table className="min-w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2 text-left">Административная единица</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Админ. центр</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Население (млн)</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Особенности</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Столичный округ Асхиния</td>
                        <td className="border border-gray-300 px-4 py-2">Асхиния</td>
                        <td className="border border-gray-300 px-4 py-2">5,6</td>
                        <td className="border border-gray-300 px-4 py-2">Столица, IT, финансы, СМИ, промышленность</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2">Столичный округ Хвиней</td>
                        <td className="border border-gray-300 px-4 py-2">Хвиней</td>
                        <td className="border border-gray-300 px-4 py-2">4,9</td>
                        <td className="border border-gray-300 px-4 py-2">Главный порт, судостроение, рыболовство, ВПК</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Центральная провинция</td>
                        <td className="border border-gray-300 px-4 py-2">Сармонт</td>
                        <td className="border border-gray-300 px-4 py-2">3,9</td>
                        <td className="border border-gray-300 px-4 py-2">Тяжёлая промышленность, транспортный хаб</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2">Восточная провинция</td>
                        <td className="border border-gray-300 px-4 py-2">Савея</td>
                        <td className="border border-gray-300 px-4 py-2">3,5</td>
                        <td className="border border-gray-300 px-4 py-2">Технопарки, ВПК, НИОКР, IT-кластеры</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Западная провинция</td>
                        <td className="border border-gray-300 px-4 py-2">Катрианпи</td>
                        <td className="border border-gray-300 px-4 py-2">2,6</td>
                        <td className="border border-gray-300 px-4 py-2">Промышленность (авто, робототехника), порты</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2">Южная провинция</td>
                        <td className="border border-gray-300 px-4 py-2">Вега</td>
                        <td className="border border-gray-300 px-4 py-2">1,9</td>
                        <td className="border border-gray-300 px-4 py-2">Сельское хозяйство (зерно, виноград, фрукты)</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Северная провинция</td>
                        <td className="border border-gray-300 px-4 py-2">Касалья</td>
                        <td className="border border-gray-300 px-4 py-2">1,4</td>
                        <td className="border border-gray-300 px-4 py-2">Курорты, виноделие, лёгкая промышленность</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-xl font-bold mb-3">Международные отношения</h3>
                <p className="mb-4">
                  <strong>Союзники:</strong> Кальвария, Вестмарк<br/>
                  <strong>Противники:</strong> Кусария (споры за газовые месторождения), Ортания (региональная сверхдержава)<br/>
                  <strong>Международные организации:</strong> Совет наций, Организация Объединённой Экологической Сети, Всемирный Торговый Союз
                </p>

                <h3 className="text-xl font-bold mb-3">Социальные проблемы</h3>
                <ul className="list-disc ml-6 mb-4">
                  <li>Недостаток квалифицированных кадров в IT</li>
                  <li>Экологические последствия промышленности</li>
                </ul>
              </section>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;