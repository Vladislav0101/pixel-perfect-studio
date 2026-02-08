import flats1Image from '@/assets/flats/1.png';
import flats2Image from '@/assets/flats/2.png';
import flats3Image from '@/assets/flats/3.png';
import flats4Image from '@/assets/flats/4.png';
import flats5Image from '@/assets/flats/5.png';

import logistic1Image from '@/assets/logistic/1.png';
import logistic2Image from '@/assets/logistic/2.png';
import logistic3Image from '@/assets/logistic/3.png';
import logistic4Image from '@/assets/logistic/4.png';
import logistic5Image from '@/assets/logistic/5.png';

import clothes1Image from '@/assets/clothes/1.png';
import clothes2Image from '@/assets/clothes/2.png';
import clothes3Image from '@/assets/clothes/3.png';
import clothes4Image from '@/assets/clothes/4.png';
import clothes5Image from '@/assets/clothes/5.png';
import clothes6Image from '@/assets/clothes/6.png';
import clothes7Image from '@/assets/clothes/7.png';
import clothes8Image from '@/assets/clothes/8.png';

export interface ProjectFunctionalityBlock {
  title: string;
  items: string[];
}

export interface Project {
  slug: string;
  title: string;
  industry: string;
  description: string;
  results: string[];
  image: string;
  imageUrl?: string;
  /** Optional gallery images for project page slider. Falls back to imageUrl/image if not set. */
  gallery?: string[];
  /** Business task (Бизнес-задача). When set, project page shows extended sections. */
  businessTask?: string;
  /** Functionality blocks (Функциональность). */
  functionality?: ProjectFunctionalityBlock[];
  /** Custom title for functionality section. Defaults to "Функциональность". */
  functionalityTitle?: string;
}

export const projects: Project[] = [
  {
    slug: 'premium-renovation',
    title: 'Премиальный ремонт квартир под ключ',
    industry: 'Лэндинг | Одностраничный сайт',
    description:
      'Проект ориентирован на привлечение заявок с высоким средним чеком. Основной акцент сделан на конверсионной структуре, работе с доверием и прозрачности условий: фиксированная смета, сроки по договору и понятный объём работ.',
    results: [
      'Снижено количество нецелевых обращений',
      'Улучшено доверие к бренду на первом контакте',
      'Сокращено время на обработку заявки',
    ],
    image: 'bg-cover',
    imageUrl: flats1Image,
    gallery: [flats1Image, flats2Image, flats3Image, flats4Image, flats5Image],
    businessTask: 'Получение заявок от клиентов с чеком выше среднего.',
    functionality: [
      {
        title: 'Структура и UX',
        items: [
          'Конверсионная структура (AIDA / JTBD)',
          'Чёткая иерархия блоков',
          'Адаптивный дизайн (mobile-first)',
          'Фокус на целевое действие',
        ],
      },
      {
        title: 'Контентные блоки',
        items: [
          'Hero-блок с сильным УТП',
          'Блоки болей и возражений',
          'Этапы работ с визуальной схемой',
          'Пакеты услуг (Comfort / Business / Premium)',
        ],
      },
      {
        title: 'Лидогенерация',
        items: [
          'Формы захвата с минимальным количеством полей',
          'Квиз-форма расчёта стоимости',
          'CTA с разными сценариями входа',
          'Защита от спама',
        ],
      },
      {
        title: 'Доверие и социальные факторы',
        items: [
          'Демонстрационные отзывы',
          'Гарантии и сертификаты',
          'Блок «частые вопросы» (FAQ)',
          'Юридическая прозрачность (договор, сроки)',
        ],
      },
      {
        title: 'Технические аспекты',
        items: [
          'Быстрая загрузка',
          'SEO-базовая оптимизация',
          'Интеграция с CRM (концепт)',
          'Аналитика (GA / Яндекс Метрика)',
        ],
      },
    ],
    functionalityTitle: 'Функциональность лэндинга',
  },
  {
    slug: 'logistics-portal',
    title: 'CRM-система логистической компании',
    industry: 'Корпоративный портал',
    description:
      'Проект разработан для автоматизации работы с клиентами: онлайн-расчёт услуг, отслеживание заказов, личные кабинеты и документооборот. Портал снижает нагрузку на менеджеров и повышает прозрачность сервиса для клиентов.',
    results: [
      'Снижена нагрузка на менеджеров',
      'Сокращение времени обработки заказа',
      'Повышена прозрачность сервиса',
    ],
    image: 'bg-cover',
    imageUrl: logistic1Image,
    gallery: [logistic1Image, logistic2Image, logistic3Image, logistic4Image, logistic5Image],
    businessTask: 'Автоматизация взаимодействия с клиентами и партнёрами.',
    functionality: [
      {
        title: 'Пользователи и роли',
        items: [
          'Роли: клиент / менеджер / администратор',
          'Разграничение прав доступа',
          'Персональные дашборды',
        ],
      },
      {
        title: 'Личный кабинет клиента',
        items: [
          'Создание и управление заказами',
          'Онлайн-расчёт стоимости доставки',
          'Отслеживание статусов в реальном времени',
          'История операций',
        ],
      },
      {
        title: 'Дашборды и аналитика',
        items: [
          'KPI по срокам доставки',
          'Количество и типы отправлений',
          'Уведомления о задержках и изменениях',
        ],
      },
      {
        title: 'Документооборот',
        items: [
          'Автоматическая генерация счетов и актов',
          'Хранение документов (PDF)',
          'Экспорт данных',
        ],
      },
      {
        title: 'Коммуникации',
        items: [
          'Уведомления (email / push)',
          'История обращений',
          'Встроенные комментарии к заказам',
        ],
      },
      {
        title: 'Интеграции (концепт)',
        items: [
          'CRM (Bitrix24 / HubSpot)',
          'Платёжные системы',
          'Сервисы трекинга и уведомлений',
        ],
      },
    ],
    functionalityTitle: 'Функциональность портала',
  },
  {
    slug: 'clothes-brand',
    title: 'Бренд одежды',
    industry: 'Интернет-магазин',
    description:
      'Проект ориентирован на онлайн-продажи и формирование узнаваемости бренда. Основной акцент сделан на визуальной подаче коллекций, удобном каталоге и быстром оформлении заказа.',
    results: [
      'Упрощён и ускорен путь покупки',
      'Сформировано доверие к новому бренду',
      'Повышена конверсия карточек товаров',
    ],
    image: 'bg-gradient-to-br from-amber-500/20 to-orange-500/20',
    imageUrl: clothes2Image,
    gallery: [
      clothes1Image,
      clothes2Image,
      clothes3Image,
      clothes4Image,
      clothes5Image,
      clothes6Image,
      clothes7Image,
      clothes8Image,
    ],
    functionalityTitle: 'Функциональность интернет-магазина',
    functionality: [
      {
        title: 'Каталог и коллекции',
        items: [
          'Каталог с коллекциями и сезонными дропами',
          'Фильтрация по размеру, цвету, цене',
          'Быстрый просмотр товара (Quick View)',
          'Поиск по каталогу',
        ],
      },
      {
        title: 'Карточка товара',
        items: [
          'Галерея фото / видео образов',
          'Выбор размера и цвета',
          'Размерная сетка',
          'Рекомендации по стилю',
          'Блок «похожие товары»',
        ],
      },
      {
        title: 'Покупка и checkout',
        items: [
          'Корзина с сохранением товаров',
          'Гостевое оформление заказа',
          'Минимальное количество шагов',
          'Несколько способов оплаты',
          'Расчёт доставки',
        ],
      },
      {
        title: 'Личный кабинет',
        items: [
          'История заказов',
          'Статусы доставки',
          'Повтор заказа',
          'Управление данными клиента',
        ],
      },
      {
        title: 'Маркетинговые функции',
        items: [
          'Промокоды и скидки',
          'Акции и лимитированные предложения',
          'Блок подписки на рассылку',
          'Поддержка дропов и предзаказов',
        ],
      },
      {
        title: 'Технические аспекты',
        items: [
          'Адаптивный дизайн (mobile-first)',
          'Быстрая загрузка страниц',
          'SEO-оптимизированные страницы товаров',
          'Интеграция с CRM и аналитикой (концепт)',
        ],
      },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
