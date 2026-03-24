/**
 * Content for the Fruteria del Sol tenant demo.
 * All placeholder content — does not copy or replicate any real business data.
 *
 * Each export is a function that accepts a `t` (translate) function
 * and returns the same object shapes the components expect.
 */

export function getNavigation(t) {
  return {
    brand: 'Fruteria del Sol',
    links: [
      { label: t('nav.menu'), href: '#menu' },
      { label: t('nav.specials'), href: '#specials' },
      { label: t('nav.ourStory'), href: '#about' },
      { label: t('nav.locations'), href: '#locations' },
    ],
    ctaLabel: t('nav.orderNow'),
  };
}

export function getHero(t) {
  return {
    overline: t('hero.overline'),
    headline: t('hero.headline'),
    subtitle: t('hero.subtitle'),
    primaryCta: t('hero.primaryCta'),
    secondaryCta: t('hero.secondaryCta'),
  };
}

export function getFeaturedItems(t) {
  return {
    overline: t('featured.overline'),
    headline: t('featured.headline'),
    subtitle: t('featured.subtitle'),
    items: [
      {
        name: 'Mangonada Grande',
        description: t('featured.mangonada.description'),
        price: '$8.99',
        badge: t('featured.mangonada.badge'),
        color: '#F09848',
      },
      {
        name: 'Fresas con Crema',
        description: t('featured.fresas.description'),
        price: '$7.49',
        badge: t('featured.fresas.badge'),
        color: '#E85D75',
      },
      {
        name: 'Elote Preparado',
        description: t('featured.elote.description'),
        price: '$5.99',
        badge: t('featured.elote.badge'),
        color: '#F9A825',
      },
      {
        name: 'Bionico',
        description: t('featured.bionico.description'),
        price: '$9.49',
        badge: t('featured.bionico.badge'),
        color: '#66BB6A',
      },
    ],
  };
}

export function getServices(t) {
  return {
    overline: t('services.overline'),
    headline: t('services.headline'),
    subtitle: t('services.subtitle'),
    items: [
      {
        title: t('services.mangonadas.title'),
        description: t('services.mangonadas.description'),
        icon: 'LocalCafe',
      },
      {
        title: t('services.fruitCups.title'),
        description: t('services.fruitCups.description'),
        icon: 'Spa',
      },
      {
        title: t('services.iceCream.title'),
        description: t('services.iceCream.description'),
        icon: 'AcUnit',
      },
      {
        title: t('services.desserts.title'),
        description: t('services.desserts.description'),
        icon: 'Cake',
      },
      {
        title: t('services.savory.title'),
        description: t('services.savory.description'),
        icon: 'Restaurant',
      },
      {
        title: t('services.drinks.title'),
        description: t('services.drinks.description'),
        icon: 'LocalBar',
      },
    ],
  };
}

export function getSpecials(t) {
  return {
    overline: t('specials.overline'),
    headline: t('specials.headline'),
    subtitle: t('specials.subtitle'),
    items: [
      {
        name: 'Watermelon Loca',
        description: t('specials.watermelon.description'),
        badge: t('specials.watermelon.badge'),
      },
      {
        name: 'Mango Chamoy Sundae',
        description: t('specials.sundae.description'),
        badge: t('specials.sundae.badge'),
      },
      {
        name: 'Family Fruit Platter',
        description: t('specials.platter.description'),
        badge: t('specials.platter.badge'),
      },
    ],
  };
}

export function getAbout(t) {
  return {
    overline: t('about.overline'),
    headline: t('about.headline'),
    description: t('about.description'),
    highlights: [
      t('about.highlight1'),
      t('about.highlight2'),
      t('about.highlight3'),
      t('about.highlight4'),
    ],
  };
}

export function getBenefits(t) {
  return {
    overline: t('benefits.overline'),
    headline: t('benefits.headline'),
    items: [
      {
        title: t('benefits.fresh.title'),
        description: t('benefits.fresh.description'),
        icon: 'Verified',
      },
      {
        title: t('benefits.family.title'),
        description: t('benefits.family.description'),
        icon: 'Favorite',
      },
      {
        title: t('benefits.flavors.title'),
        description: t('benefits.flavors.description'),
        icon: 'AutoAwesome',
      },
      {
        title: t('benefits.convenient.title'),
        description: t('benefits.convenient.description'),
        icon: 'Speed',
      },
    ],
  };
}

export function getProcess(t) {
  return {
    overline: t('process.overline'),
    headline: t('process.headline'),
    subtitle: t('process.subtitle'),
    steps: [
      {
        number: '01',
        title: t('process.browse.title'),
        description: t('process.browse.description'),
      },
      {
        number: '02',
        title: t('process.customize.title'),
        description: t('process.customize.description'),
      },
      {
        number: '03',
        title: t('process.order.title'),
        description: t('process.order.description'),
      },
      {
        number: '04',
        title: t('process.enjoy.title'),
        description: t('process.enjoy.description'),
      },
    ],
  };
}

export function getTestimonials(t) {
  return {
    overline: t('testimonials.overline'),
    headline: t('testimonials.headline'),
    items: [
      {
        quote: t('testimonials.maria.quote'),
        name: 'Maria G.',
        role: t('testimonials.maria.role'),
        company: 'Kyle, TX',
      },
      {
        quote: t('testimonials.daniel.quote'),
        name: 'Daniel R.',
        role: t('testimonials.daniel.role'),
        company: 'Buda, TX',
      },
      {
        quote: t('testimonials.priya.quote'),
        name: 'Priya S.',
        role: t('testimonials.priya.role'),
        company: 'Austin, TX',
      },
    ],
  };
}

export function getCta(t) {
  return {
    headline: t('cta.headline'),
    subtitle: t('cta.subtitle'),
    buttonLabel: t('cta.buttonLabel'),
    note: t('cta.note'),
  };
}

export function getLocations(t) {
  return {
    overline: t('locations.overline'),
    headline: t('locations.headline'),
    subtitle: t('locations.subtitle'),
    items: [
      {
        name: 'Fruteria del Sol \u2014 Main Street',
        address: '123 Main Street, Suite A',
        city: 'Sunvale, TX 78640',
        phone: '(512) 555-0142',
        hours: [
          { days: t('locations.mainSt.days1'), time: t('locations.mainSt.time1') },
          { days: t('locations.mainSt.days2'), time: t('locations.mainSt.time2') },
        ],
      },
      {
        name: 'Fruteria del Sol \u2014 East Side',
        address: '456 Valley Road',
        city: 'Eastbrook, TX 78617',
        phone: '(737) 555-0198',
        hours: [
          { days: t('locations.eastSide.days1'), time: t('locations.eastSide.time1') },
          { days: t('locations.eastSide.days2'), time: t('locations.eastSide.time2') },
        ],
      },
    ],
  };
}

export function getFooter(t) {
  return {
    brand: 'Fruteria del Sol',
    tagline: t('footer.tagline'),
    columns: [
      {
        title: t('footer.quickLinks'),
        links: [
          { label: t('nav.menu'), href: '#menu' },
          { label: t('nav.specials'), href: '#specials' },
          { label: t('nav.ourStory'), href: '#about' },
          { label: t('nav.locations'), href: '#locations' },
        ],
      },
      {
        title: t('footer.ordering'),
        links: [
          { label: t('footer.orderPickup'), href: '#' },
          { label: t('footer.orderDelivery'), href: '#' },
          { label: t('footer.catering'), href: '#' },
          { label: t('footer.rewardsProgram'), href: '#' },
        ],
      },
      {
        title: t('footer.contact'),
        links: [
          { label: 'hello@fruteriadelsol.com', href: 'mailto:hello@fruteriadelsol.com' },
          { label: '(512) 555-0142', href: 'tel:+15125550142' },
          { label: '123 Main Street, Sunvale, TX', href: null },
        ],
      },
    ],
    copyright: t('footer.copyright'),
    legalLinks: [
      { label: t('footer.privacyPolicy'), href: '#' },
      { label: t('footer.termsOfService'), href: '#' },
    ],
  };
}
