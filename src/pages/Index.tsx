import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [selectedFlavor, setSelectedFlavor] = useState<'cranberry' | 'lemon' | null>(null);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">Аква Прима</div>
          <div className="hidden md:flex gap-8">
            <button onClick={() => scrollToSection('flavors')} className="hover:text-primary transition-colors">Вкусы</button>
            <button onClick={() => scrollToSection('benefits')} className="hover:text-primary transition-colors">Преимущества</button>
            <button onClick={() => scrollToSection('composition')} className="hover:text-primary transition-colors">Состав</button>
            <button onClick={() => scrollToSection('delivery')} className="hover:text-primary transition-colors">Доставка</button>
            <button onClick={() => scrollToSection('contacts')} className="hover:text-primary transition-colors">Контакты</button>
          </div>
          <Button onClick={() => scrollToSection('contacts')}>Заказать</Button>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Вкусовая вода
                <span className="block text-primary mt-2">нового поколения</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Натуральные вкусы клюквы и лимона в кристально чистой воде. Освежает, утоляет жажду, заряжает энергией.
              </p>
              <div className="flex gap-4">
                <Button size="lg" onClick={() => scrollToSection('flavors')} className="text-lg px-8">
                  Выбрать вкус
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('composition')} className="text-lg px-8">
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/7d4c4c19-aa5d-4894-b2e8-9a08f99290d8/files/d944c92a-3d93-4005-b9b6-765bc28cb180.jpg"
                alt="Вкусовая вода Аква Прима"
                className="rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="flavors" className="py-12 px-4 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Наши вкусы</h2>
          <p className="text-gray-600 text-lg mb-8">Два натуральных вкуса для вашего удовольствия</p>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-red-50 to-pink-50 relative overflow-hidden">
        <div className="absolute top-10 right-10 w-32 h-32 opacity-20">
          <div className="text-9xl">🫐</div>
        </div>
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-5xl font-bold mb-8 text-cranberry">Напиток безалкогольный газированный со вкусом клюквы 0,5 л</h3>
              
              <p className="text-gray-800 text-lg mb-6 leading-relaxed">
                Этот напиток сочетает в себе чистоту природной воды, яркий вкус спелой клюквы и легкую сладость, которая подчеркивает натуральность продукта.
              </p>
              
              <p className="text-gray-800 text-lg mb-8 leading-relaxed">
                Клюква известна своими полезными свойствами: она богата антиоксидантами, поддерживает иммунитет и помогает сохранять бодрость в течение дня. Наша вода со вкусом клюквы — это идеальный выбор для тех, кто ищет вкусный и освежающий напиток с натуральным вкусом.
              </p>

              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-cranberry/20">
                <h4 className="font-bold text-lg mb-3 text-cranberry">Состав:</h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Вода питьевая природная, сахар, регулятор кислотности — лимонная кислота (E330), концентрированный сок черной моркови, натуральный ароматизатор, консерванты — бензоат натрия (E211), сорбат калия (E202)
                </p>
              </div>

              <Button 
                size="lg" 
                onClick={() => scrollToSection('contacts')} 
                className="bg-cranberry hover:bg-cranberry/90 text-white text-lg px-10 shadow-lg"
              >
                Заказать клюквенную воду
              </Button>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative">
                <img 
                  src="https://cdn.poehali.dev/files/bf84c4ac-a4d5-4d9d-947d-47183f49b0b9.png"
                  alt="Напиток со вкусом клюквы"
                  className="w-full hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-yellow-50 to-amber-50 relative overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 opacity-20">
          <div className="text-9xl">🍋</div>
        </div>
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="relative">
                <img 
                  src="https://cdn.poehali.dev/files/12b74a27-a5ed-45ee-ae48-356ecfa08da9.png"
                  alt="Вода питьевая негазированная со вкусом лимона"
                  className="w-full hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <div>
              <h3 className="text-5xl font-bold mb-8 text-lemon">Вода питьевая негазированная со вкусом лимона 0,5 л</h3>
              
              <p className="text-gray-800 text-lg mb-6 leading-relaxed">
                Вода со вкусом лимона сочетает в себе чистоту воды, натуральный вкус спелого лимона и легкую сладость, которая делает его идеальным для любого момента дня.
              </p>
              
              <p className="text-gray-800 text-lg mb-6 leading-relaxed">
                Лимон не только придает воде яркий, освежающий вкус, но и помогает поддерживать баланс витаминов в организме, улучшает пищеварение и дарит ощущение легкости.
              </p>

              <p className="text-gray-800 text-lg mb-8 leading-relaxed">
                Сахар добавлен в минимальном количестве, чтобы подчеркнуть натуральный вкус лимона, это прекрасный выбор для тех, кто ищет вкусный и полезный напиток.
              </p>

              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-lemon/20">
                <h4 className="font-bold text-lg mb-3 text-lemon">Состав:</h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Вода питьевая природная, глюкозно-фруктозный сироп, регулятор кислотности — лимонная кислота (E330), натуральный ароматизатор консерванты — бензоат натрия (E211), сорбат калия (E202)
                </p>
              </div>

              <Button 
                size="lg" 
                onClick={() => scrollToSection('contacts')} 
                className="bg-lemon hover:bg-lemon/90 text-white text-lg px-10 shadow-lg"
              >
                Заказать лимонную воду
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="benefits" className="py-20 px-4 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Преимущества</h2>
          <p className="text-center text-gray-600 mb-16 text-lg">Почему выбирают Аква Прима</p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Droplets" size={32} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">100% натурально</h3>
              <p className="text-gray-600">
                Только натуральные вкусовые экстракты без искусственных добавок и красителей
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Heart" size={32} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Ноль калорий</h3>
              <p className="text-gray-600">
                Наслаждайтесь вкусом без лишних калорий и сахара. Идеально для здорового образа жизни
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Sparkles" size={32} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Кристальная чистота</h3>
              <p className="text-gray-600">
                Многоступенчатая система очистки воды гарантирует идеальное качество продукта
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Leaf" size={32} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Экологично</h3>
              <p className="text-gray-600">
                Используем перерабатываемую упаковку и заботимся об окружающей среде
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Zap" size={32} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Энергия и бодрость</h3>
              <p className="text-gray-600">
                Витамины и минералы помогают оставаться активным в течение всего дня
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Award" size={32} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Проверенное качество</h3>
              <p className="text-gray-600">
                Все продукты сертифицированы и соответствуют высоким стандартам безопасности
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section id="composition" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-4">Состав</h2>
          <p className="text-center text-gray-600 mb-16 text-lg">Прозрачность и честность в каждой бутылке</p>
          
          <Card className="p-8 md:p-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <Icon name="Droplet" className="text-primary" />
                  Основа
                </h3>
                <p className="text-gray-700 text-lg">
                  Артезианская вода высшей категории качества, прошедшая многоступенчатую систему очистки и минерализации.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <Icon name="Apple" className="text-cranberry" />
                  Клюква
                </h3>
                <ul className="space-y-3 text-gray-700 text-lg">
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-cranberry mt-1 flex-shrink-0" size={20} />
                    <span>Натуральный экстракт клюквы</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-cranberry mt-1 flex-shrink-0" size={20} />
                    <span>Натуральные ароматизаторы</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-cranberry mt-1 flex-shrink-0" size={20} />
                    <span>Без сахара и подсластителей</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <Icon name="Citrus" className="text-lemon" />
                  Лимон
                </h3>
                <ul className="space-y-3 text-gray-700 text-lg">
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-lemon mt-1 flex-shrink-0" size={20} />
                    <span>Натуральный сок лимона</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-lemon mt-1 flex-shrink-0" size={20} />
                    <span>Эфирные масла цитрусовых</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-lemon mt-1 flex-shrink-0" size={20} />
                    <span>Без сахара и подсластителей</span>
                  </li>
                </ul>
              </div>

              <div className="pt-8 border-t">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">0</div>
                    <div className="text-gray-600">калорий</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">0</div>
                    <div className="text-gray-600">сахара</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">100%</div>
                    <div className="text-gray-600">натурально</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section id="delivery" className="py-20 px-4 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold text-center mb-4">Доставка</h2>
          <p className="text-center text-gray-600 mb-16 text-lg">Быстро и удобно по всему городу</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Truck" className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Бесплатная доставка</h3>
                  <p className="text-gray-600">При заказе от 3 упаковок</p>
                </div>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-3">
                  <Icon name="Clock" className="text-primary flex-shrink-0" size={20} />
                  <span>Доставка в день заказа</span>
                </li>
                <li className="flex items-center gap-3">
                  <Icon name="MapPin" className="text-primary flex-shrink-0" size={20} />
                  <span>По всему городу и области</span>
                </li>
                <li className="flex items-center gap-3">
                  <Icon name="Phone" className="text-primary flex-shrink-0" size={20} />
                  <span>Уведомление за час до приезда</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Package" className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Форматы упаковки</h3>
                  <p className="text-gray-600">На любой случай</p>
                </div>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-3">
                  <Icon name="Check" className="text-primary flex-shrink-0" size={20} />
                  <span>Бутылки 0.5 л (упаковка 12 шт)</span>
                </li>
                <li className="flex items-center gap-3">
                  <Icon name="Check" className="text-primary flex-shrink-0" size={20} />
                  <span>Бутылки 1 л (упаковка 6 шт)</span>
                </li>
                <li className="flex items-center gap-3">
                  <Icon name="Check" className="text-primary flex-shrink-0" size={20} />
                  <span>Бутылки 5 л для офиса</span>
                </li>
              </ul>
            </Card>
          </div>

          <Card className="p-8 mt-8 bg-primary text-white">
            <div className="text-center">
              <Icon name="Gift" className="mx-auto mb-4" size={48} />
              <h3 className="text-2xl font-bold mb-3">Специальное предложение</h3>
              <p className="text-xl mb-6">При первом заказе — скидка 15% и бесплатная доставка!</p>
              <Button size="lg" variant="secondary" onClick={() => scrollToSection('contacts')} className="text-lg px-8">
                Оформить заказ
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-4">Контакты</h2>
          <p className="text-center text-gray-600 mb-16 text-lg">Свяжитесь с нами любым удобным способом</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6">Отдел продаж</h3>
              <div className="space-y-4">
                <a href="tel:+74955551234" className="flex items-center gap-4 text-lg hover:text-primary transition-colors">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">+7 (495) 555-12-34</div>
                    <div className="text-sm text-gray-600">Пн-Пт 9:00-21:00</div>
                  </div>
                </a>

                <a href="mailto:info@aquaprima.ru" className="flex items-center gap-4 text-lg hover:text-primary transition-colors">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">info@aquaprima.ru</div>
                    <div className="text-sm text-gray-600">Ответим в течение часа</div>
                  </div>
                </a>

                <a href="https://aquaprima.ru" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-lg hover:text-primary transition-colors">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Globe" className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">aquaprima.ru</div>
                    <div className="text-sm text-gray-600">Основной сайт</div>
                  </div>
                </a>
              </div>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6">Офис</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Адрес</div>
                    <div className="text-gray-600">г. Москва, ул. Водная, д. 15</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Режим работы</div>
                    <div className="text-gray-600">Пн-Пт: 9:00 - 21:00</div>
                    <div className="text-gray-600">Сб-Вс: 10:00 - 18:00</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" className="text-lg px-12">
              <Icon name="ShoppingCart" className="mr-2" />
              Заказать сейчас
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold mb-4 text-primary">Аква Прима</div>
              <p className="text-gray-400">
                Производство и доставка качественной питьевой воды с натуральными вкусами.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Навигация</h4>
              <div className="space-y-2">
                <button onClick={() => scrollToSection('flavors')} className="block hover:text-primary transition-colors">Вкусы</button>
                <button onClick={() => scrollToSection('benefits')} className="block hover:text-primary transition-colors">Преимущества</button>
                <button onClick={() => scrollToSection('composition')} className="block hover:text-primary transition-colors">Состав</button>
                <button onClick={() => scrollToSection('delivery')} className="block hover:text-primary transition-colors">Доставка</button>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <div>+7 (495) 555-12-34</div>
                <div>info@aquaprima.ru</div>
                <a href="https://aquaprima.ru" target="_blank" rel="noopener noreferrer" className="block hover:text-primary transition-colors">
                  aquaprima.ru
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© 2024 Аква Прима. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;