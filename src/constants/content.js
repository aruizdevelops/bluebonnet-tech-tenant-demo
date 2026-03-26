/**
 * Content for the Tropikala Smoothie Co. landing page.
 * All fictional placeholder content.
 */

export function getHero(t) {
  return {
    overline: t('hero.overline'),
    headline: t('hero.headline'),
    subtitle: t('hero.subtitle'),
    primaryCta: t('hero.primaryCta'),
    secondaryCta: t('hero.secondaryCta'),
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
      { title: t('benefits.fresh.title'), description: t('benefits.fresh.description'), icon: 'Eco' },
      { title: t('benefits.nutrition.title'), description: t('benefits.nutrition.description'), icon: 'FitnessCenter' },
      { title: t('benefits.custom.title'), description: t('benefits.custom.description'), icon: 'Tune' },
      { title: t('benefits.fast.title'), description: t('benefits.fast.description'), icon: 'FlashOn' },
    ],
  };
}

export function getTestimonials(t) {
  return {
    overline: t('testimonials.overline'),
    headline: t('testimonials.headline'),
    items: [
      { quote: t('testimonials.maya.quote'), name: 'Maya L.', role: t('testimonials.maya.role'), company: 'Austin, TX', rating: 5 },
      { quote: t('testimonials.jordan.quote'), name: 'Jordan K.', role: t('testimonials.jordan.role'), company: 'Denver, CO', rating: 5 },
      { quote: t('testimonials.priya.quote'), name: 'Priya S.', role: t('testimonials.priya.role'), company: 'Portland, OR', rating: 5 },
    ],
  };
}

export function getPromotions(t) {
  return {
    overline: t('promotions.overline'),
    headline: t('promotions.headline'),
    subtitle: t('promotions.subtitle'),
    items: [
      { name: t('promotions.happyHour.name'), description: t('promotions.happyHour.description'), badge: t('promotions.happyHour.badge') },
      { name: t('promotions.loyalty.name'), description: t('promotions.loyalty.description'), badge: t('promotions.loyalty.badge') },
      { name: t('promotions.seasonal.name'), description: t('promotions.seasonal.description'), badge: t('promotions.seasonal.badge') },
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

export function getFooter(t) {
  return {
    brand: t('footer.brand'),
    tagline: t('footer.tagline'),
    columns: [
      {
        title: t('footer.quickLinks'),
        links: [
          { label: t('nav.menu'), href: '#menu' },
          { label: t('nav.about'), href: '#about' },
          { label: t('nav.promotions'), href: '#promotions' },
          { label: t('nav.nutrition'), href: '#nutrition' },
        ],
      },
      {
        title: t('footer.categories'),
        links: [
          { label: t('footer.classicBlends'), href: '#regular' },
          { label: t('footer.specialtyCreations'), href: '#specialty' },
          { label: t('footer.seasonal'), href: '#seasonal' },
          { label: t('footer.proteinPacked'), href: '#protein' },
        ],
      },
      {
        title: t('footer.contact'),
        links: [
          { label: 'hello@tropikala.co', href: 'mailto:hello@tropikala.co' },
          { label: '(512) 555-0247', href: 'tel:+15125550247' },
          { label: '742 Palm Avenue, Austin, TX', href: null },
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
