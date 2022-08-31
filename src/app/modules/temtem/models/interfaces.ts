export interface Stats {
  hp: number;
  sta: number;
  spd: number;
  atk: number;
  def: number;
  spatk: number;
  spdef: number;
  total: number;
}

export interface Height {
  cm: number;
  inches: number;
}

export interface Weight {
  kg: number;
  lbs: number;
}

export interface Details {
  height: Height;
  weight: Weight;
}

export interface Technique {
  name: string;
  source: string;
  levels: number;
}

export interface TraitMapping {
  AttackT: string;
  FastCharge: string;
  VoltaicCharge: string;
  Parrier: string;
  Neutrality: string;
  Splitter: string;
  Sentinel: string;
  ToxicAffinity: string;
  Amphibian: string;
  Resistant: string;
  Resilient: string;
  Zen: string;
  Determined: string;
  SharedPain: string;
  Mithridatism: string;
  Botanist: string;
  ToxicFarewell: string;
  PunchBag: string;
  Specgulp: string;
  Physgulp: string;
  Hover: string;
  Friendship: string;
  Caffeinated: string;
  Camaraderie: string;
  LastRush: string;
  Bully: string;
  DreadedAlarm: string;
  Relaxed: string;
  Infectious: string;
  Receptive: string;
  ElectricSynthesize: string;
  Hydrologist: string;
  Plethoric: string;
  Patient: string;
  Furor: string;
  Scavenger: string;
  Brawny: string;
  Rested: string;
  HurryWart: string;
  Unnoticed: string;
  MentalAlliance: string;
  SoftTouch: string;
  Avenger: string;
  WaterAffinity: string;
  DeceitAura: string;
  WaterCustodian: string;
  Apothecary: string;
  TriApothecary: string;
  Pyromaniac: string;
  Settling: string;
  Mirroring: string;
  FaintedCurse: string;
  Channeler: string;
  WreckedFarewell: string;
  HeatDischarge: string;
  Enraged: string;
  WarmGift: string;
  IgnisFatuus: string;
  WarmBlooded: string;
  Mucous: string;
  Withdrawal: string;
  SourceReplicator: string;
  TargetReplicator: string;
  AirSpecialist: string;
  Hypnotist: string;
  TagTeam: string;
  Bruiser: string;
  PuppetMaster: string;
  Rejuvenate: string;
  Demoralize: string;
  Prideful: string;
  Motivator: string;
  EnergyReserves: string;
  Immunity: string;
  StrongLiver: string;
  HalfFull: string;
  GoodFriend: string;
  GottaGoFast: string;
  GoingAwayGift: string;
  Sensei: string;
  BodyStretch: string;
  Tireless: string;
  Provident: string;
  Confined: string;
  Efficient: string;
  CowardsRest: string;
  Welcomer: string;
  Inductor: string;
  Defuser: string;
  ThickSkin: string;
  Solidifier: string;
  KineticTransfer: string;
  ElectricCustodian: string;
  FeverRush: string;
  SelfEsteem: string;
  Earthbound: string;
  SkullHelmet: string;
  DozingHit: string;
  InnerShield: string;
  Callosity: string;
  PowerNap: string;
  Trance: string;
  ToxicSkin: string;
  Aerobic: string;
  Anaerobic: string;
  Autotomy: string;
  Marathonist: string;
  Camouflage: string;
  Seppuku: string;
  Voodoo: string;
  Spoilsport: string;
  Spreader: string;
  Heater: string;
  Escapist: string;
  TacticalStrike: string;
  CommonFactor: string;
  Contemplation: string;
  Individualist: string;
  Vigorous: string;
  RoyalJelly: string;
  WaxBath: string;
  ViralCombustion: string;
  Refurbished: string;
  Ruminant: string;
  Rusher: string;
  ArcaneWrap: string;
  Aggressor: string;
  Spiritual: string;
  Meditation: string;
  Shaolin: string;
  Trauma: string;
  FlawedCrystal: string;
  SelfCare: string;
  ProtectiveCrystal: string;
}

export interface EvolutionTree {
  stage: number;
  number: number;
  name: string;
  level: number;
  type: string;
  trading: boolean;
  traits: string[];
  traitMapping: TraitMapping;
  description: string;
}

export interface From {
  stage: number;
  number: number;
  name: string;
  level: number;
  type: string;
  trading: boolean;
  traits: string[];
  traitMapping: TraitMapping;
  description: string;
}

export interface To {
  stage: number;
  number: number;
  name: string;
  level: number;
  type: string;
  trading: boolean;
  traits: string[];
  traitMapping: TraitMapping;
  description: string;
}

export interface Evolution {
  evolves: boolean;
  stage?: number;
  evolutionTree: EvolutionTree[];
  type: string;
  from: From;
  to: To;
  number?: number;
  name: string;
  level?: number;
  trading?: boolean;
  traits: string[];
  traitMapping: TraitMapping;
  description: string;
}

export interface Freetem {
  minLevel: number;
  maxLevel: number;
  minPansuns?: number;
  maxPansuns?: number;
}

export interface Location {
  location: string;
  place: string;
  note: string;
  island: string;
  frequency: string;
  level: string;
  freetem: Freetem;
}

export interface GenderRatio {
  male: number;
  female: number;
}

export interface TvYields {
  hp: number;
  sta: number;
  spd: number;
  atk: number;
  def: number;
  spatk: number;
  spdef: number;
}

export interface Temtem {
  number: number;
  name: string;
  types: string[];
  portraitWikiUrl: string;
  lumaPortraitWikiUrl: string;
  wikiUrl: string;
  stats: Stats;
  traits: string[];
  details: Details;
  techniques: Technique[];
  trivia: string[];
  evolution: Evolution;
  wikiPortraitUrlLarge: string;
  lumaWikiPortraitUrlLarge: string;
  locations: Location[];
  icon: string;
  lumaIcon: string;
  genderRatio: GenderRatio;
  catchRate: number;
  hatchMins: number;
  tvYields: TvYields;
  gameDescription: string;
  wikiRenderStaticUrl: string;
  wikiRenderAnimatedUrl: string;
  wikiRenderStaticLumaUrl: string;
  wikiRenderAnimatedLumaUrl: string;
  renderStaticImage: string;
  renderStaticLumaImage: string;
  renderAnimatedImage: string;
  renderAnimatedLumaImage: string;
}
