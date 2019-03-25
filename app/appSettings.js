class AppSettings {
  static get webApiUrl() {
    switch (process.env.NODE_ENV) {
      case 'development':
        return 'http://localhost:6001';
      case 'production':
        return `${window.location.protocol}//${window.location.host}`;
      default:
        return '';
    }
  }

  static get successLoginRedirectUrl() {
    return '/home';
  }
}

export default AppSettings;
