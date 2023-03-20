import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Address = {
  __typename?: "Address";
  line1: Scalars["String"];
  line2?: Maybe<Scalars["String"]>;
  line3?: Maybe<Scalars["String"]>;
  line4?: Maybe<Scalars["String"]>;
  line5?: Maybe<Scalars["String"]>;
};

export type Advertisement = {
  __typename?: "Advertisement";
  /** Concatenation of page and info about place where ad should be placed */
  placementKey?: Maybe<Scalars["String"]>;
  /** Code snippet to insert */
  script?: Maybe<Scalars["String"]>;
};

export type Availability = {
  __typename?: "Availability";
  /** The calendar entries */
  calendar?: Maybe<Array<Maybe<CalendarAvailability>>>;
  /** The first available check in date */
  firstAvailableCheckInDate?: Maybe<Scalars["String"]>;
  /** The last available check in date */
  lastAvailableCheckInDate?: Maybe<Scalars["String"]>;
  /** Type of the stay */
  stayType?: Maybe<Scalars["String"]>;
};

export type AvailabilityAmount = {
  __typename?: "AvailabilityAmount";
  /** The amount */
  amount: Scalars["Float"];
  /** The amount to display in FE */
  amountForDisplay: Scalars["String"];
};

export type AvailabilityCheckOutDate = {
  __typename?: "AvailabilityCheckOutDate";
  /** The available rooms */
  availableRooms: Scalars["Int"];
  /** The check out date as string */
  date: Scalars["String"];
  /** The price for check out date */
  price?: Maybe<AvailabilityPrice>;
};

export type AvailabilityPrice = {
  __typename?: "AvailabilityPrice";
  /** The final rate */
  finalRate: AvailabilityAmount;
  /** The local fees */
  localFees: AvailabilityAmount;
  /** The price */
  price: AvailabilityAmount;
  /** The room rate */
  roomRate: AvailabilityAmount;
  /** The taxes */
  taxes: AvailabilityAmount;
};

export type AvailabilityPrices = {
  __typename?: "AvailabilityPrices";
  /** Checkin date */
  checkin?: Maybe<Scalars["String"]>;
  /** Checkout date */
  checkout?: Maybe<Scalars["String"]>;
  /** Offer id */
  offer?: Maybe<Scalars["String"]>;
  /** Price per night for display purposes (£123) */
  pricePerNightForDisplay?: Maybe<Scalars["String"]>;
  /** Label for the price per night (e.g. 'per night per room') */
  pricePerNightLabel?: Maybe<Scalars["String"]>;
  /** Total price for display purposes (£1234) */
  totalPriceForDisplay?: Maybe<Scalars["String"]>;
  /** Label for the total price (e.g. 'total') */
  totalPriceLabel?: Maybe<Scalars["String"]>;
  /** Sub-label for the total price (e.g. 'based on 2 people') */
  totalPriceSubLabel?: Maybe<Scalars["String"]>;
  /** Total rack rate for display purposes (£1560) */
  totalRackRateForDisplay?: Maybe<Scalars["String"]>;
};

export type Badge = {
  __typename?: "Badge";
  /** The color of the Badge */
  color?: Maybe<Scalars["String"]>;
  /** The flag saying if the Badge has high priority */
  highPriority?: Maybe<Scalars["Boolean"]>;
  /** The icon name of the Badge */
  iconName?: Maybe<Scalars["String"]>;
  /** The title of the Badge */
  title?: Maybe<Scalars["String"]>;
  /** The tooltip of the Badge */
  tooltip?: Maybe<BadgeTooltip>;
};

export type BadgeTooltip = {
  __typename?: "BadgeTooltip";
  /** The description of the Badge's Tooltip */
  description?: Maybe<Scalars["String"]>;
  /** The title of the Badge's Tooltip */
  title?: Maybe<Scalars["String"]>;
};

export type Booking = {
  __typename?: "Booking";
  /** Amended dates */
  amendedDates?: Maybe<Dates>;
  /** Booking dates */
  bookingDates: Dates;
  /** Cancellation policy for a booking */
  cancellationPolicy?: Maybe<BookingCancellationPolicy>;
  /** Cancellation Summaries available, if is cancellable */
  cancellationSummaries?: Maybe<Array<Maybe<CancellationSummary>>>;
  /** Number of nights booked */
  duration: Scalars["Int"];
  /** Hotel details */
  hotelDetails: HotelDetails;
  /** ID of the Booking */
  id: Scalars["String"];
  /** Lead image of a sale */
  leadImage?: Maybe<Photo>;
  /** Links for booking */
  links: BookingLinks;
  /** Occupancy */
  occupancy?: Maybe<Occupancy>;
  /** Offer ID */
  offerId?: Maybe<Scalars["String"]>;
  /** What the customer paid */
  paidBreakdown?: Maybe<PriceBreakdown>;
  /** Number of rooms booked */
  rooms: Scalars["Int"];
  /** Sale ID */
  saleId?: Maybe<Scalars["String"]>;
  /** Location of the sale */
  saleLocation: Location;
  /** Should allow resending confirmation email */
  shouldAllowResendEmails?: Maybe<Scalars["Boolean"]>;
  /** Status of the booking */
  status: BookingStatus;
  /** Title of the sale booked */
  title: Scalars["String"];
  /** Total booking amount */
  totalBookingAmount?: Maybe<Price>;
  /** Transaction id of the Booking */
  transactionId: Scalars["String"];
};

export type BookingCancellationPolicy = {
  __typename?: "BookingCancellationPolicy";
  /** whether the reservation can be cancelled or not */
  isCancellable: Scalars["Boolean"];
  /** whether the reservation can be rebooked or not */
  isRebookable: Scalars["Boolean"];
  /** The reason why the reservation is not cancellable */
  notCancellableReason?: Maybe<Scalars["String"]>;
  /** Properties related to CancellationPolicy */
  properties?: Maybe<Array<Maybe<CancellationPolicyProperty>>>;
};

export type BookingCancellationResponse = {
  __typename?: "BookingCancellationResponse";
  message?: Maybe<Scalars["String"]>;
  success: Scalars["Boolean"];
};

export type BookingLinks = {
  __typename?: "BookingLinks";
  /** link to print confirmation email */
  printConfirmationEmail?: Maybe<Scalars["String"]>;
  /** Link to print pdf invoice */
  printPdfInvoice?: Maybe<Scalars["String"]>;
  /** Link to external booking details */
  viewExternalBookingDetails?: Maybe<Scalars["String"]>;
};

export type BookingStats = {
  __typename?: "BookingStats";
  /** Visitors looking at the sale */
  currentVisitors?: Maybe<Scalars["Int"]>;
  /** Times booked already */
  timesBooked?: Maybe<Scalars["Int"]>;
};

export enum BookingStatus {
  Cancelled = "CANCELLED",
  Past = "PAST",
  Upcoming = "UPCOMING",
}

export type BookingsCount = {
  __typename?: "BookingsCount";
  cancelled: Scalars["Int"];
  past: Scalars["Int"];
  upcoming: Scalars["Int"];
};

export enum CacheControlScope {
  Private = "PRIVATE",
  Public = "PUBLIC",
}

export type Calendar = {
  __typename?: "Calendar";
  /** The available dates for booking */
  calendarEntries?: Maybe<Array<Maybe<CalendarEntry>>>;
  /** The currency for the displayed amounts */
  currency: Currency;
  /** The type of stay */
  stayType: StayType;
};

export type CalendarAvailability = {
  __typename?: "CalendarAvailability";
  /** The cancellation selection information */
  cancellationSelectionInformation?: Maybe<Scalars["String"]>;
  /** The check in date as string */
  checkInDate: Scalars["String"];
  /** The available check out dates for booking */
  checkOutDates?: Maybe<Array<Maybe<AvailabilityCheckOutDate>>>;
  /** The currency for the displayed amounts */
  currency: Scalars["String"];
  /** The price for check in date */
  price?: Maybe<AvailabilityPrice>;
  /** The information regarding the rates including fees */
  showFeeInclusiveRates?: Maybe<Scalars["Boolean"]>;
  /** The information regarding the rates including taxes */
  showTaxInclusiveRates?: Maybe<Scalars["Boolean"]>;
};

export type CalendarEntry = {
  __typename?: "CalendarEntry";
  /** Available for checkout only */
  checkOutDayOnly: Scalars["Boolean"];
  /** Closed to arrival (CTA) */
  closedToArrival: Scalars["Boolean"];
  /** Closed to departure (CTD) */
  closedToDeparture: Scalars["Boolean"];
  /** The date of stay */
  date: Scalars["String"];
  /** The maximum number of nights a user can select */
  maxLengthOfStay: Scalars["Int"];
  /** The minimum number of nights a user can select */
  minLengthOfStay: Scalars["Int"];
  /** Rate Code */
  rateCode: Scalars["String"];
  /** The available prices */
  rates: CalendarRates;
};

export type CalendarRates = {
  __typename?: "CalendarRates";
  rate: Price;
};

export type CalendarSelectionSummary = {
  __typename?: "CalendarSelectionSummary";
  alreadyPaidBreakdown?: Maybe<PriceBreakdown>;
  balance: Price;
  cancellationSelectionInformation?: Maybe<Scalars["String"]>;
  priceBreakdown?: Maybe<PriceBreakdown>;
  rateCodes?: Maybe<Array<Maybe<Scalars["String"]>>>;
  resortFeeDisclaimer?: Maybe<Scalars["String"]>;
};

export type CancellationEditorial = {
  __typename?: "CancellationEditorial";
  /** Confirmation Disclaimer to be shown before the user confirms the cancellation */
  confirmationDisclaimer: Scalars["String"];
  /** The disclaimer */
  disclaimer: Scalars["String"];
  /** The text of the button */
  mainCTA: Scalars["String"];
  /** Description of the refund */
  refundTotalDescription?: Maybe<Scalars["String"]>;
  /** The cancellation summary subtitle */
  subtitle?: Maybe<Scalars["String"]>;
  /** The cancellation summary title */
  title?: Maybe<Scalars["String"]>;
};

export type CancellationInfo = {
  __typename?: "CancellationInfo";
  /** Description */
  description?: Maybe<Scalars["String"]>;
  /** Description warning */
  descriptionWarning?: Maybe<Scalars["String"]>;
  /** isRefundable */
  isRefundable: Scalars["Boolean"];
  /** Summary */
  summary?: Maybe<Scalars["String"]>;
};

export type CancellationPolicyAttributes = {
  __typename?: "CancellationPolicyAttributes";
  /** Description */
  description?: Maybe<Scalars["String"]>;
  /** Description warning */
  descriptionWarning?: Maybe<Scalars["String"]>;
  /** Summary */
  summary?: Maybe<Scalars["String"]>;
};

export enum CancellationPolicyKey {
  Deadline = "DEADLINE",
}

export type CancellationPolicyProperty = {
  __typename?: "CancellationPolicyProperty";
  key?: Maybe<CancellationPolicyKey>;
  value?: Maybe<Scalars["String"]>;
};

export type CancellationSummary = {
  __typename?: "CancellationSummary";
  /** The refund method code */
  code: Scalars["String"];
  /** Main copy to be displayed on the page */
  editorial: CancellationEditorial;
  /** What the customer will get refunded */
  toBeRefundedBreakdown: PriceBreakdown;
};

export type Collection = {
  __typename?: "Collection";
  description?: Maybe<Scalars["String"]>;
  /** Absolute URL for collection hero image */
  heroUrl?: Maybe<Scalars["String"]>;
  /** Absolute URL for collection hero image, with a template to replace with actual height and width */
  heroUrlWithSize?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Int"]>;
  metaDescription?: Maybe<Scalars["String"]>;
  metaKeywords?: Maybe<Scalars["String"]>;
  metaTitle?: Maybe<Scalars["String"]>;
  tags?: Maybe<Array<Maybe<Scalars["String"]>>>;
  tileImage?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
};

export type CollectionPanel = {
  __typename?: "CollectionPanel";
  /** Absolute URL for collection cover image */
  imageUrl?: Maybe<Scalars["String"]>;
  /** Absolute URL for collection cover image, with a template to replace with actual height and width */
  imageUrlWithSize?: Maybe<Scalars["String"]>;
  /** Integer representing the display oder of the collection in the panel */
  position?: Maybe<Scalars["Int"]>;
  /** Localised display text for the collection */
  text?: Maybe<Scalars["String"]>;
  /** URL for page on site the collection panel links to */
  url?: Maybe<Scalars["String"]>;
};

export enum CollectionType {
  CuratedCollections = "curatedCollections",
  TopDestinations = "topDestinations",
  TripTypes = "tripTypes",
}

export type ConfirmationEmailResponse = {
  __typename?: "ConfirmationEmailResponse";
  message?: Maybe<Scalars["String"]>;
  success: Scalars["Boolean"];
};

export type Credit = {
  __typename?: "Credit";
  /** Amount of the credit */
  amount?: Maybe<Price>;
  /** Currency of the credit */
  currency?: Maybe<Scalars["String"]>;
  /** Date the credit was issued to user */
  dateIssued?: Maybe<Scalars["String"]>;
  /** Date the credit was used */
  dateRedeemed?: Maybe<Scalars["String"]>;
  /** Description of the credit */
  description?: Maybe<Scalars["String"]>;
  /** Date the credit expires */
  expiresOn?: Maybe<Scalars["String"]>;
  /** Minimum Booking Amount of the credit */
  minimumBookingAmount?: Maybe<Price>;
  /** Status of the credit */
  status?: Maybe<CreditStatus>;
};

export enum CreditStatus {
  Active = "ACTIVE",
  RefundedCash = "REFUNDED_CASH",
  Used = "USED",
}

export type CreditSummary = {
  __typename?: "CreditSummary";
  /** List of users credits */
  credits?: Maybe<Array<Maybe<Credit>>>;
  /** Sum of all users credits */
  sumOfAllCredits?: Maybe<Price>;
  /** Sum of all users available credits */
  sumOfAvailableCredits?: Maybe<Price>;
  /** Sum of all users used credits */
  sumOfUsedCredits?: Maybe<Price>;
};

export type Currency = {
  __typename?: "Currency";
  /** Currency code */
  currencyCode?: Maybe<Scalars["String"]>;
};

export type Dates = {
  __typename?: "Dates";
  /** End date */
  end?: Maybe<Scalars["String"]>;
  /** Start date */
  start?: Maybe<Scalars["String"]>;
};

export enum DestinationType {
  Europe = "EUROPE",
  London = "LONDON",
  LongHaul = "LONG_HAUL",
  MiddleHaul = "MIDDLE_HAUL",
  Uk = "UK",
}

export type FavoriteResponse = {
  __typename?: "FavoriteResponse";
  message?: Maybe<Scalars["String"]>;
  success: Scalars["Boolean"];
};

export type FlightPreferencesInput = {
  /** Airport departure code */
  departureAirport?: InputMaybe<Scalars["String"]>;
  /** Number of durations */
  duration?: InputMaybe<Scalars["Int"]>;
  /** External reference */
  externalReference?: InputMaybe<Scalars["String"]>;
  /** People per room */
  groups?: InputMaybe<Array<InputMaybe<GroupsInput>>>;
  /** People with age */
  people?: InputMaybe<Array<InputMaybe<PersonInput>>>;
};

export type FlightPrices = {
  __typename?: "FlightPrices";
  /** All departure airports */
  airports?: Maybe<Array<Maybe<HotelPlusAirports>>>;
  /** Departure airport code for price */
  departureAirportCode?: Maybe<Scalars["String"]>;
  /** Departure airport name for price */
  departureAirportName?: Maybe<Scalars["String"]>;
  /** duration for price */
  duration?: Maybe<Scalars["Int"]>;
  /** All durations */
  durations?: Maybe<Array<Maybe<HotelPlusDurations>>>;
  /** All offers */
  offers?: Maybe<Array<Maybe<HotelPlusOffers>>>;
  /** Price for an offer */
  priceForDisplay?: Maybe<Scalars["String"]>;
};

export type GroupsInput = {
  /** People per room */
  people?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
};

export type HotelDetails = {
  __typename?: "HotelDetails";
  /** Address of the hotel */
  address?: Maybe<Address>;
  /** customerSupport email */
  customerSupportEmail?: Maybe<Scalars["String"]>;
  /** customerSupport number */
  customerSupportNumber?: Maybe<Scalars["String"]>;
};

export type HotelPlusAirports = {
  __typename?: "HotelPlusAirports";
  /** Departure airport city name */
  departureAirportCityName?: Maybe<Scalars["String"]>;
  /** Departure airport code */
  departureAirportCode?: Maybe<Scalars["String"]>;
  /** Departure airport name */
  departureAirportName?: Maybe<Scalars["String"]>;
  /** Airport price for display */
  priceForDisplay?: Maybe<Scalars["String"]>;
};

export type HotelPlusDurations = {
  __typename?: "HotelPlusDurations";
  /** Number of durations */
  duration?: Maybe<Scalars["Int"]>;
  /** Duration price for display */
  priceForDisplay?: Maybe<Scalars["String"]>;
};

export type HotelPlusOffers = {
  __typename?: "HotelPlusOffers";
  /** External reference */
  externalReference?: Maybe<Scalars["String"]>;
  /** Offer Name */
  name?: Maybe<Scalars["String"]>;
  /** Offer id */
  offerId?: Maybe<Scalars["String"]>;
  /** Offer price for display */
  priceForDisplay?: Maybe<Scalars["String"]>;
};

export enum IconName {
  Anchor = "anchor",
  Apple = "apple",
  Arrow = "arrow",
  Arrowdown = "arrowdown",
  Arrowright = "arrowright",
  Asterisk = "asterisk",
  Bell = "bell",
  Bolt = "bolt",
  Book = "book",
  Bookmark = "bookmark",
  Calendar = "calendar",
  Camera = "camera",
  Caret = "caret",
  Certificate = "certificate",
  Checkmark = "checkmark",
  Close = "close",
  Creditcard = "creditcard",
  Deposit = "deposit",
  Desktop = "desktop",
  Dollar = "dollar",
  Earth = "earth",
  Euro = "euro",
  Facebook = "facebook",
  Film = "film",
  Flag = "flag",
  Food = "food",
  Gift = "gift",
  Glass = "glass",
  Google = "google",
  Heart = "heart",
  Heartempty = "heartempty",
  Home = "home",
  IconBed = "iconBed",
  Info = "info",
  Key = "key",
  Leaf = "leaf",
  Load = "load",
  Lock = "lock",
  Longarrowdown = "longarrowdown",
  Marker = "marker",
  Minus = "minus",
  Money = "money",
  Music = "music",
  Picture = "picture",
  Plane = "plane",
  Plus = "plus",
  Pound = "pound",
  Refresh = "refresh",
  Road = "road",
  Share = "share",
  Shield = "shield",
  Shoppingcart = "shoppingcart",
  Smile = "smile",
  Star = "star",
  Starempty = "starempty",
  Suitcase = "suitcase",
  Sun = "sun",
  Tag = "tag",
  Thumbsupalt = "thumbsupalt",
  Ticket = "ticket",
  Time = "time",
  Tint = "tint",
  Travel = "travel",
  Traveller = "traveller",
  Trophy = "trophy",
  Twitter = "twitter",
  Unlockalt = "unlockalt",
  Usd = "usd",
  User = "user",
  Warningsign = "warningsign",
  Zoom = "zoom",
}

export enum ImageFormat {
  Landscape = "landscape",
  Portrait = "portrait",
}

export type Location = {
  __typename?: "Location";
  /** City */
  city?: Maybe<LocationEntry>;
  /** City District */
  cityDistrict?: Maybe<LocationEntry>;
  /** Continent */
  continent?: Maybe<LocationEntry>;
  /** Country */
  country?: Maybe<LocationEntry>;
  /** Division */
  division?: Maybe<LocationEntry>;
  /** Latitude */
  latitude?: Maybe<Scalars["Float"]>;
  /** Longitude */
  longitude?: Maybe<Scalars["Float"]>;
};

export type LocationEntry = {
  __typename?: "LocationEntry";
  id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
};

export type Mutation = {
  __typename?: "Mutation";
  addFavorite: FavoriteResponse;
  addReminder: ReminderResponse;
  cancelBooking: BookingCancellationResponse;
  removeFavorite: FavoriteResponse;
  removeReminder: ReminderResponse;
  sendConfirmationEmail?: Maybe<ConfirmationEmailResponse>;
};

export type MutationAddFavoriteArgs = {
  saleId: Scalars["String"];
  userId: Scalars["String"];
};

export type MutationAddReminderArgs = {
  saleId: Scalars["String"];
  userId: Scalars["String"];
};

export type MutationCancelBookingArgs = {
  bookingId: Scalars["String"];
  rebooking?: InputMaybe<Scalars["Boolean"]>;
  refundMethod?: InputMaybe<Scalars["String"]>;
};

export type MutationRemoveFavoriteArgs = {
  saleId: Scalars["String"];
  userId: Scalars["String"];
};

export type MutationRemoveReminderArgs = {
  saleId: Scalars["String"];
  userId: Scalars["String"];
};

export type MutationSendConfirmationEmailArgs = {
  bookingId: Scalars["String"];
  userId: Scalars["String"];
};

export type Occupancy = {
  __typename?: "Occupancy";
  /** Maximum number of adults */
  adults: Scalars["Int"];
  /** Maximum number of children */
  children: Scalars["Int"];
  /** Maximum number of infants */
  infants: Scalars["Int"];
};

export type Offer = {
  __typename?: "Offer";
  /** The availability for the offer */
  availability?: Maybe<Availability>;
  /** The calendar for the offer */
  calendar?: Maybe<Calendar>;
  /** Summary of calendar selection for specific days */
  calendarSelectionSummary?: Maybe<CalendarSelectionSummary>;
  /** Description of the offer */
  description?: Maybe<Scalars["String"]>;
  /** The details of the offer */
  details?: Maybe<OfferDetails>;
  /** ID of the offer */
  id: Scalars["String"];
  /** Information about what is included in the offer */
  inclusions?: Maybe<OfferInclusions>;
  /** The flag informing if its the default offer */
  isDefault?: Maybe<Scalars["Boolean"]>;
  /** The offer prices */
  prices?: Maybe<Prices>;
  /** RateCode of the offer */
  rateCode?: Maybe<Scalars["String"]>;
  /** The details of the room */
  room?: Maybe<OfferRoom>;
  /** Title of the offer */
  title?: Maybe<Scalars["String"]>;
};

export type OfferAvailabilityArgs = {
  checkInFirstDate?: InputMaybe<Scalars["String"]>;
  checkInLastDate?: InputMaybe<Scalars["String"]>;
  flightPreferences?: InputMaybe<FlightPreferencesInput>;
  period?: InputMaybe<Scalars["Int"]>;
  rooms: Scalars["Int"];
};

export type OfferCalendarArgs = {
  rooms: Scalars["Int"];
};

export type OfferCalendarSelectionSummaryArgs = {
  checkin?: InputMaybe<Scalars["String"]>;
  checkout?: InputMaybe<Scalars["String"]>;
  rebookedReservationId?: InputMaybe<Scalars["String"]>;
  rooms?: InputMaybe<Scalars["Int"]>;
};

export type OfferDetails = {
  __typename?: "OfferDetails";
  /** The offer image */
  image?: Maybe<Scalars["String"]>;
  /** The offer location */
  location?: Maybe<Scalars["String"]>;
  /** The long description of the offer */
  longDescription?: Maybe<Scalars["String"]>;
};

export type OfferInclusions = {
  __typename?: "OfferInclusions";
  /** The descriptions on which basis the total Inclusions value is calculated, e.g. based on 2 people for 2 nights */
  totalInclusionsDescription?: Maybe<Scalars["String"]>;
  /** The monetary value for all the extras that are included with the offer, formated for the territory currency and locale */
  totalInclusionsForDisplay?: Maybe<Scalars["String"]>;
};

export type OfferRoom = {
  __typename?: "OfferRoom";
  /** The text information about the room */
  info?: Maybe<OfferRoomInfo>;
  /** The limits for the room */
  limit?: Maybe<OfferRoomLimit>;
  /** The room based On Description */
  roomBasedOn?: Maybe<Scalars["String"]>;
  /** The room description */
  roomDescription?: Maybe<Scalars["String"]>;
  /** The room type singular */
  roomType?: Maybe<Scalars["String"]>;
  /** The room type plural */
  roomTypePlural?: Maybe<Scalars["String"]>;
};

export type OfferRoomInfo = {
  __typename?: "OfferRoomInfo";
  /** The offer room child policy */
  childPolicy?: Maybe<Scalars["String"]>;
  /** The offer room single policy */
  singlePolicy?: Maybe<Scalars["String"]>;
};

export type OfferRoomLimit = {
  __typename?: "OfferRoomLimit";
  /** The limit of adults in the room */
  maxAdults?: Maybe<Scalars["Int"]>;
  /** The limit of all persons in the room */
  maxAvailable?: Maybe<Scalars["Int"]>;
  /** Max age limit allowed for a child in a room */
  maxChildAge?: Maybe<Scalars["Int"]>;
  /** The limit of children in the room */
  maxChildren?: Maybe<Scalars["Int"]>;
  /** The limit of dependants in the room */
  maxDependants?: Maybe<Scalars["Int"]>;
  /** Max age limit allowed for an infant in a room */
  maxInfantAge?: Maybe<Scalars["Int"]>;
  /** The limit of infants in the room */
  maxInfants?: Maybe<Scalars["Int"]>;
  /** Min age limit allowed for a child in a room */
  minChildAge?: Maybe<Scalars["Int"]>;
  /** Min age limit allowed for an infant in a room */
  minInfantAge?: Maybe<Scalars["Int"]>;
};

export type OtherMatchesEntry = {
  __typename?: "OtherMatchesEntry";
  /** List of sales */
  sales?: Maybe<Array<Maybe<Sale>>>;
  /** Key to be used to get the translation for the title of the section */
  titleKey?: Maybe<Scalars["String"]>;
};

export enum PageName {
  BookingConfirmation = "bookingConfirmation",
  Collections = "collections",
  ConfirmPayment = "confirmPayment",
  CurrentSales = "currentSales",
  Offers = "offers",
  SearchResults = "searchResults",
}

export type PersonInput = {
  /** Age of person */
  age?: InputMaybe<Scalars["Int"]>;
};

export type Photo = {
  __typename?: "Photo";
  /** Caption */
  caption?: Maybe<Scalars["String"]>;
  /** URL */
  url?: Maybe<Scalars["String"]>;
  /** Image URL with replaceable tokens $width and $height that can be substituted for desired px values to dynamically size the image */
  urlWithSize?: Maybe<Scalars["String"]>;
};

export type Price = {
  __typename?: "Price";
  /** Pre-formatted price to be displayed verbatim in the display layer */
  forDisplay?: Maybe<Scalars["String"]>;
  /** Unit price */
  unit?: Maybe<Scalars["Float"]>;
  /** Unit price per-person */
  unitPerPerson?: Maybe<Scalars["Float"]>;
};

export type PriceBreakdown = {
  __typename?: "PriceBreakdown";
  /** Breakdown items */
  items?: Maybe<Array<Maybe<PriceBreakdownItem>>>;
  /** Total price of all items */
  total: Price;
};

export type PriceBreakdownItem = {
  __typename?: "PriceBreakdownItem";
  /** Item concept */
  concept: Scalars["String"];
  /** Is item Tax or Fee */
  isTaxOrFee?: Maybe<Scalars["Boolean"]>;
  /** Item price */
  price: Price;
};

export type Prices = {
  __typename?: "Prices";
  /** Availability information when it is a date search */
  availability?: Maybe<AvailabilityPrices>;
  /** Currency */
  currency?: Maybe<Currency>;
  /** Price to be paid initially when deposit booking is made */
  depositFromPrice?: Maybe<Price>;
  /** Discount in percentage */
  discount?: Maybe<Scalars["Int"]>;
  /** Localised tooltip label for discount value */
  discountTooltip?: Maybe<Scalars["String"]>;
  /** The discounted rate offered by secret escapes */
  leadRate?: Maybe<Price>;
  /** Localised label for discounted price */
  leadRateLabel?: Maybe<Scalars["String"]>;
  /** Localised tooltip label for discounted price */
  leadRateTooltip?: Maybe<Scalars["String"]>;
  /** Localised label for the discounted price unit */
  leadRateUnitLabel?: Maybe<Scalars["String"]>;
  /** Max number of adults that can occupy same room */
  maxNumberOfAdults?: Maybe<Scalars["Int"]>;
  /** Number of nights spent in hotel, without any nights spent in plane etc. Refers to one of offers, arbitrary chosen as best one for sale display purposes */
  numberOfHotelNights?: Maybe<Scalars["Int"]>;
  /** Price of what is exposed to user. Eg per room, per person */
  pricingModelForDisplay?: Maybe<Scalars["String"]>;
  /** Display rules related to prices */
  pricingRules?: Maybe<PricingRules>;
  /** The hotel rate, without any discounts */
  rackRate?: Maybe<Price>;
};

export type PricingRules = {
  __typename?: "PricingRules";
  /** Whether the discount percentage should be shown or not */
  showDiscount?: Maybe<Scalars["Boolean"]>;
  /** Whether the discounted prices should be shown or not */
  showPrices?: Maybe<Scalars["Boolean"]>;
  /** Whether the original price should be shown or not */
  showRackRate?: Maybe<Scalars["Boolean"]>;
  /** Whether the urgent discount price should be shown or not */
  showUrgentDiscount?: Maybe<Scalars["Boolean"]>;
};

export type Query = {
  __typename?: "Query";
  advertisements?: Maybe<Array<Maybe<Advertisement>>>;
  booking?: Maybe<Booking>;
  bookings?: Maybe<Array<Maybe<Booking>>>;
  bookingsCount?: Maybe<BookingsCount>;
  collection?: Maybe<Collection>;
  collectionPanels?: Maybe<Array<Maybe<CollectionPanel>>>;
  collections?: Maybe<Array<Maybe<Collection>>>;
  creditSummary?: Maybe<CreditSummary>;
  editorsPickSale?: Maybe<Sale>;
  favorites?: Maybe<Array<Maybe<Scalars["String"]>>>;
  locations?: Maybe<Array<Maybe<Scalars["String"]>>>;
  recentlyViewedSales?: Maybe<Array<Maybe<Sale>>>;
  recommendations?: Maybe<Array<Maybe<Sale>>>;
  reminders?: Maybe<Array<Maybe<Scalars["String"]>>>;
  sale?: Maybe<Sale>;
  saleSearch?: Maybe<SearchResults>;
  sales?: Maybe<Array<Maybe<Sale>>>;
  territoryConfiguration?: Maybe<TerritoryConfiguration>;
  upcomingSales?: Maybe<UpcomingSalesResults>;
};

export type QueryAdvertisementsArgs = {
  affiliate: Scalars["String"];
  mobile?: InputMaybe<Scalars["Boolean"]>;
  page?: InputMaybe<PageName>;
};

export type QueryBookingArgs = {
  bookingId: Scalars["String"];
};

export type QueryBookingsArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  status?: InputMaybe<Scalars["String"]>;
};

export type QueryBookingsCountArgs = {
  userId?: InputMaybe<Scalars["String"]>;
};

export type QueryCollectionArgs = {
  affiliate: Scalars["String"];
  urlSlug: Scalars["String"];
};

export type QueryCollectionPanelsArgs = {
  imageFormat?: InputMaybe<ImageFormat>;
  territory?: InputMaybe<Scalars["String"]>;
  type?: InputMaybe<CollectionType>;
};

export type QueryCollectionsArgs = {
  affiliate: Scalars["String"];
};

export type QueryEditorsPickSaleArgs = {
  affiliate?: InputMaybe<Scalars["String"]>;
  currency?: InputMaybe<Scalars["String"]>;
  isWhiteLabel?: InputMaybe<Scalars["Boolean"]>;
  territory?: InputMaybe<Scalars["String"]>;
};

export type QueryFavoritesArgs = {
  userId: Scalars["String"];
};

export type QueryLocationsArgs = {
  locationQuery: Scalars["String"];
  territory: Scalars["String"];
};

export type QueryRecentlyViewedSalesArgs = {
  affiliate?: InputMaybe<Scalars["String"]>;
  currency?: InputMaybe<Scalars["String"]>;
  isWhiteLabel?: InputMaybe<Scalars["Boolean"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  territory?: InputMaybe<Scalars["String"]>;
  userId?: InputMaybe<Scalars["String"]>;
};

export type QueryRecommendationsArgs = {
  affiliate?: InputMaybe<Scalars["String"]>;
  attachEditorsPick?: InputMaybe<Scalars["Boolean"]>;
  currency?: InputMaybe<Scalars["String"]>;
  isWhiteLabel?: InputMaybe<Scalars["Boolean"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  saleId?: InputMaybe<Scalars["String"]>;
  source?: InputMaybe<RecommendationSource>;
  territory: Scalars["String"];
  userId?: InputMaybe<Scalars["String"]>;
};

export type QueryRemindersArgs = {
  userId: Scalars["String"];
};

export type QuerySaleArgs = {
  affiliate?: InputMaybe<Scalars["String"]>;
  checkin?: InputMaybe<Scalars["String"]>;
  checkout?: InputMaybe<Scalars["String"]>;
  currency?: InputMaybe<Scalars["String"]>;
  saleId: Scalars["String"];
  territory?: InputMaybe<Scalars["String"]>;
};

export type QuerySaleSearchArgs = {
  affiliate?: InputMaybe<Scalars["String"]>;
  checkin?: InputMaybe<Scalars["String"]>;
  checkout?: InputMaybe<Scalars["String"]>;
  collections?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  currency?: InputMaybe<Scalars["String"]>;
  flexibleDates?: InputMaybe<Scalars["Boolean"]>;
  isWhiteLabel?: InputMaybe<Scalars["Boolean"]>;
  months?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  query?: InputMaybe<Scalars["String"]>;
  recommendationSource?: InputMaybe<RecommendationSource>;
  removeEditorsPick?: InputMaybe<Scalars["Boolean"]>;
  saleIds?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  searchSource?: InputMaybe<SearchSource>;
  sortBy?: InputMaybe<SortOrder>;
  startedSince?: InputMaybe<Scalars["String"]>;
  territory?: InputMaybe<Scalars["String"]>;
  travelTypes?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  weekendsOnly?: InputMaybe<Scalars["Boolean"]>;
};

export type QuerySalesArgs = {
  affiliate?: InputMaybe<Scalars["String"]>;
  currency?: InputMaybe<Scalars["String"]>;
  isWhiteLabel?: InputMaybe<Scalars["Boolean"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  territory?: InputMaybe<Scalars["String"]>;
};

export type QueryTerritoryConfigurationArgs = {
  territory?: InputMaybe<Scalars["String"]>;
  userTerritory?: InputMaybe<Scalars["String"]>;
};

export type QueryUpcomingSalesArgs = {
  affiliate?: InputMaybe<Scalars["String"]>;
  currency?: InputMaybe<Scalars["String"]>;
  isWhiteLabel?: InputMaybe<Scalars["Boolean"]>;
  territory?: InputMaybe<Scalars["String"]>;
};

export enum RecommendationSource {
  Athena = "athena",
  AthenaI2i = "athena_i2i",
  AthenaShot = "athena_shot",
  Jetlore = "jetlore",
}

export type RefinementFacetsEntry = {
  __typename?: "RefinementFacetsEntry";
  /** Refinement facet entry name */
  name?: Maybe<Scalars["String"]>;
  /** List of elements */
  value?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

export type ReminderResponse = {
  __typename?: "ReminderResponse";
  message?: Maybe<Scalars["String"]>;
  success: Scalars["Boolean"];
};

export type Sale = {
  __typename?: "Sale";
  /** Attributes */
  attributes?: Maybe<SaleAttributes>;
  /** The Badges of the Sale */
  badges?: Maybe<Array<Maybe<Badge>>>;
  /** Urgency information */
  bookingStats?: Maybe<BookingStats>;
  /** Cancellation info for a sale */
  cancellationInfo?: Maybe<CancellationInfo>;
  /** Cancellation policy for a booking */
  cancellationPolicy?: Maybe<CancellationPolicyAttributes>;
  /** Dates information */
  dates?: Maybe<Dates>;
  /** default offer id of the sale */
  defaultOfferId?: Maybe<Scalars["String"]>;
  /** Editorial content, descriptions of sale and hotel */
  editorial?: Maybe<SaleEditorial>;
  /** Flights */
  flights?: Maybe<FlightPrices>;
  /** ID of the sale */
  id: Scalars["String"];
  /** Sale labels */
  labels?: Maybe<Array<Maybe<SaleLabel>>>;
  /** Urls related */
  links?: Maybe<SaleLinks>;
  /** Location */
  location?: Maybe<Location>;
  /** A specific offer for a sale */
  offer?: Maybe<Offer>;
  /** The offers for the sale */
  offers?: Maybe<Array<Maybe<Offer>>>;
  /** Photos, first one will be main photo */
  photos?: Maybe<Array<Maybe<Photo>>>;
  /** Sale prices */
  prices?: Maybe<Prices>;
  /** Sale promotion */
  promotion?: Maybe<SalePromotion>;
  /** Tags */
  tags?: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** Transport related information */
  travel?: Maybe<SaleTravel>;
  /** Sale type */
  type: SaleType;
};

export type SaleFlightsArgs = {
  departureAirportCode?: InputMaybe<Scalars["String"]>;
  duration?: InputMaybe<Scalars["Int"]>;
  flightsEnabled: Scalars["Boolean"];
  offerId?: InputMaybe<Scalars["String"]>;
  saleId?: InputMaybe<Scalars["String"]>;
  territory?: InputMaybe<Scalars["String"]>;
};

export type SaleOfferArgs = {
  offerId: Scalars["String"];
};

export type SalePhotosArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
};

export type SaleTagsArgs = {
  keys?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type SaleAttributes = {
  __typename?: "SaleAttributes";
  /** Is it connected sale */
  isConnected?: Maybe<Scalars["Boolean"]>;
  /** Whether it is current or upcoming sale */
  isCurrent?: Maybe<Scalars["Boolean"]>;
  /** Is deposit */
  isDepositSale?: Maybe<Scalars["Boolean"]>;
  /** Dynamic Package */
  isDynamicPackage?: Maybe<Scalars["Boolean"]>;
  /** Editor's pick */
  isEditorsPick?: Maybe<Scalars["Boolean"]>;
  /** Exclusive sale */
  isExclusive?: Maybe<Scalars["Boolean"]>;
  /** Mysterious */
  isMysterious?: Maybe<Scalars["Boolean"]>;
  /** Can the sale be displayed to the user as refundable */
  isRefundable?: Maybe<Scalars["Boolean"]>;
  /** Smart Stay */
  isSmartStay?: Maybe<Scalars["Boolean"]>;
  /** Does the sale have an end date the user should be aware of */
  isTimeLimited?: Maybe<Scalars["Boolean"]>;
  /** Is zero deposit */
  isZeroDeposit?: Maybe<Scalars["Boolean"]>;
};

export type SaleEditorial = {
  __typename?: "SaleEditorial";
  /** Deal includes */
  dealIncludes?: Maybe<Scalars["String"]>;
  /** User friendly, one sentence destination usually including hotel name, city, region name */
  destinationName?: Maybe<Scalars["String"]>;
  /** Hotel details */
  hotelDetails?: Maybe<Scalars["String"]>;
  /** Location */
  location?: Maybe<Scalars["String"]>;
  /** Main paragraph */
  mainParagraph?: Maybe<Scalars["String"]>;
  /** Short, one sentence information about cool things about the venue */
  reasonToLove?: Maybe<Scalars["String"]>;
  /** Where user is going to sleep eg room, tent */
  roomDescription?: Maybe<Scalars["String"]>;
  /** How hotel is described at other web pages */
  secondOpinion?: Maybe<Scalars["String"]>;
  /** summary */
  summary?: Maybe<Scalars["String"]>;
  /** Title */
  title?: Maybe<Scalars["String"]>;
  /** Travel details */
  travelDetails?: Maybe<Scalars["String"]>;
  /** We Like */
  weLike?: Maybe<Scalars["String"]>;
};

export type SaleLabel = {
  __typename?: "SaleLabel";
  /** HexCode */
  hexCode: Scalars["String"];
  /** Icon code */
  iconCode: IconName;
  /** Label Key */
  labelKey?: Maybe<Scalars["String"]>;
  /** Summary */
  summary?: Maybe<Scalars["String"]>;
};

export type SaleLinks = {
  __typename?: "SaleLinks";
  /** Link to price comparsion */
  priceComparison?: Maybe<Scalars["String"]>;
  /** Relative link to sale details page */
  sale?: Maybe<Scalars["String"]>;
  /** Link to tripadvisors page where hotel of the sale is reviewed */
  tripAdvisor?: Maybe<Scalars["String"]>;
};

export type SalePromotion = {
  __typename?: "SalePromotion";
  /** Description */
  description?: Maybe<Scalars["String"]>;
  /** HexCode */
  hexCode?: Maybe<Scalars["String"]>;
  /** Icon code */
  iconCode?: Maybe<IconName>;
  /** Label */
  label?: Maybe<Scalars["String"]>;
  /** Tag name */
  tagName?: Maybe<Scalars["String"]>;
};

export type SaleTravel = {
  __typename?: "SaleTravel";
  /** can the flight be added while booking is made */
  hasFlightsAvailable?: Maybe<Scalars["Boolean"]>;
  /** is flight already included in price */
  hasFlightsIncluded?: Maybe<Scalars["Boolean"]>;
  /** Type of travel, eg flight, train */
  travelType?: Maybe<Scalars["String"]>;
};

/**
 * Hotel type - basic  offer contains of room only. Stock is maintained by SE or fetched from external provider
 * Package - basic offer contains of room and flight. Hotel and flight configuration is done by SE
 * IHP - basic offer contains of room and flight.  Hotel and flight configuration is done by external provider
 * WRD - Web redirect sales - offer contains of either rooms or rooms + flights. User is redirected to partner site in order to see do the booking
 */
export enum SaleType {
  Hotel = "hotel",
  Ihp = "ihp",
  Package = "package",
  Wrd = "wrd",
}

export type SearchResults = {
  __typename?: "SearchResults";
  /** Other possible matches */
  otherMatches?: Maybe<Array<Maybe<OtherMatchesEntry>>>;
  /** Search query */
  query?: Maybe<Scalars["String"]>;
  /** Refinement facets list */
  refinementFacets?: Maybe<Array<Maybe<RefinementFacetsEntry>>>;
  /** Count of results */
  resultCount?: Maybe<Scalars["Int"]>;
  /** List of sales */
  sales?: Maybe<Array<Maybe<Sale>>>;
  /** Spell checked suggestion */
  spellCheckedQuery?: Maybe<Scalars["String"]>;
};

export type SearchResultsSalesArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
};

export enum SearchSource {
  Kingfisher = "kingfisher",
  V4 = "v4",
}

export enum SortOrder {
  Discount = "DISCOUNT",
  Newest = "NEWEST",
  PriceAsc = "PRICE_ASC",
  PriceDesc = "PRICE_DESC",
  Relevance = "RELEVANCE",
}

export enum StayType {
  Fixed = "FIXED",
  Flexible = "FLEXIBLE",
}

export type TerritoryConfiguration = {
  __typename?: "TerritoryConfiguration";
  /** Indicate if we can show the deposit label on the current sales page */
  depositAvailableAtCSPage?: Maybe<Scalars["Boolean"]>;
  /** Indicate if we can show the flights available label on the current sales page */
  flightsAvailableAtCSPage?: Maybe<Scalars["Boolean"]>;
  /** Dynamic config value to determine if ASA is enabled */
  isASAEnabled?: Maybe<Scalars["Boolean"]>;
  /** Is flight functionality enabled */
  isFlightFunctionalityEnabled?: Maybe<Scalars["Boolean"]>;
  /** Indicate if we can show the zero deposit label on the current sales page */
  isZeroDepositDisplayable?: Maybe<Scalars["Boolean"]>;
  /** Point of sale locale - related to territory of page that user is seeing, eg en_GB */
  posLocale?: Maybe<Scalars["String"]>;
  /** Price threshold value determined by dynamic config */
  priceThreshold?: Maybe<Scalars["Int"]>;
  /** Locale of territory user is assigned to, eg de_DE */
  userLocale?: Maybe<Scalars["String"]>;
};

export type UpcomingSalesResults = {
  __typename?: "UpcomingSalesResults";
  /** Count of results */
  resultCount?: Maybe<Scalars["Int"]>;
  /** List of sales */
  sales?: Maybe<Array<Maybe<Sale>>>;
};

export type UpcomingSalesResultsSalesArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
};

export type SaleDetailsQueryVariables = Exact<{
  saleId: Scalars["String"];
}>;

export type SaleDetailsQuery = {
  __typename?: "Query";
  sale?: {
    __typename?: "Sale";
    editorial?: {
      __typename?: "SaleEditorial";
      title?: string | null;
      destinationName?: string | null;
      hotelDetails?: string | null;
    } | null;
    prices?: {
      __typename?: "Prices";
      leadRate?: { __typename?: "Price"; forDisplay?: string | null } | null;
    } | null;
    photos?: Array<{ __typename?: "Photo"; url?: string | null } | null> | null;
  } | null;
};

export type SaleSearchQueryVariables = Exact<{
  query?: InputMaybe<Scalars["String"]>;
  travelTypes?: InputMaybe<
    Array<InputMaybe<Scalars["String"]>> | InputMaybe<Scalars["String"]>
  >;
}>;

export type SaleSearchQuery = {
  __typename?: "Query";
  saleSearch?: {
    __typename?: "SearchResults";
    resultCount?: number | null;
    sales?: Array<{
      __typename?: "Sale";
      id: string;
      editorial?: {
        __typename?: "SaleEditorial";
        title?: string | null;
        destinationName?: string | null;
      } | null;
      photos?: Array<{
        __typename?: "Photo";
        url?: string | null;
      } | null> | null;
    } | null> | null;
  } | null;
};

export const SaleDetailsDocument = gql`
  query SaleDetails($saleId: String!) {
    sale(saleId: $saleId) {
      editorial {
        title
        destinationName
        hotelDetails
      }
      prices {
        leadRate {
          forDisplay
        }
      }
      photos {
        url
      }
    }
  }
`;

/**
 * __useSaleDetailsQuery__
 *
 * To run a query within a React component, call `useSaleDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSaleDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSaleDetailsQuery({
 *   variables: {
 *      saleId: // value for 'saleId'
 *   },
 * });
 */
export function useSaleDetailsQuery(
  baseOptions: Apollo.QueryHookOptions<
    SaleDetailsQuery,
    SaleDetailsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<SaleDetailsQuery, SaleDetailsQueryVariables>(
    SaleDetailsDocument,
    options
  );
}
export function useSaleDetailsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    SaleDetailsQuery,
    SaleDetailsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<SaleDetailsQuery, SaleDetailsQueryVariables>(
    SaleDetailsDocument,
    options
  );
}
export type SaleDetailsQueryHookResult = ReturnType<typeof useSaleDetailsQuery>;
export type SaleDetailsLazyQueryHookResult = ReturnType<
  typeof useSaleDetailsLazyQuery
>;
export type SaleDetailsQueryResult = Apollo.QueryResult<
  SaleDetailsQuery,
  SaleDetailsQueryVariables
>;
export const SaleSearchDocument = gql`
  query SaleSearch($query: String, $travelTypes: [String]) {
    saleSearch(query: $query, travelTypes: $travelTypes) {
      resultCount
      sales(limit: 10, offset: 0) {
        id
        editorial {
          title
          destinationName
        }
        photos {
          url
        }
      }
    }
  }
`;

/**
 * __useSaleSearchQuery__
 *
 * To run a query within a React component, call `useSaleSearchQuery` and pass it any options that fit your needs.
 * When your component renders, `useSaleSearchQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSaleSearchQuery({
 *   variables: {
 *      query: // value for 'query'
 *      travelTypes: // value for 'travelTypes'
 *   },
 * });
 */
export function useSaleSearchQuery(
  baseOptions?: Apollo.QueryHookOptions<
    SaleSearchQuery,
    SaleSearchQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<SaleSearchQuery, SaleSearchQueryVariables>(
    SaleSearchDocument,
    options
  );
}
export function useSaleSearchLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    SaleSearchQuery,
    SaleSearchQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<SaleSearchQuery, SaleSearchQueryVariables>(
    SaleSearchDocument,
    options
  );
}
export type SaleSearchQueryHookResult = ReturnType<typeof useSaleSearchQuery>;
export type SaleSearchLazyQueryHookResult = ReturnType<
  typeof useSaleSearchLazyQuery
>;
export type SaleSearchQueryResult = Apollo.QueryResult<
  SaleSearchQuery,
  SaleSearchQueryVariables
>;
