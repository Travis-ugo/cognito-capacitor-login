export interface UserInterface {
  pk: string;
  sk: string;
  createdDate?: string;
  updatedDate: string;
  userId?: string;
  dataMap: {
    createdDate?: string;
    freeTrialExpires?: string;
    lastLogin?: string;
    optInNewsletter?: boolean;
    optInReminders?: boolean;
    optInAnalytics?: boolean;
    screenName?: string;
    subscribed?: boolean;
    userId?: string;
    avatar?: string;
    avatarId?: string;
    showIntroLink?: boolean;
    dismissedIntroSlides?: boolean;
    notifications?: object;
    fcmToken?: string;
    timezoneOffset?: number;
    helpModalCheckin?: boolean;
    helpModalJournal?: boolean;
    helpModalLessons?: boolean;
    helpModalPathways?: boolean;
    helpModalTasks?: boolean;
    ageGroup?: number,
    parentalStatus?: number[],
    pointsTarget?: number
  };
}


