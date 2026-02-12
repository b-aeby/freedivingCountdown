/**
 * Classe pour gérer le delta temps entre une heure de départ et une autre heure
 */
class TimeDelta {
  /**
   * Constructeur
   * @param {Date|number|string} startTime - L'heure de départ (Date, timestamp ou string ISO)
   */
  constructor(startTime) {
    if (startTime instanceof Date) {
      this.startTime = startTime;
    } else if (typeof startTime === 'number') {
      this.startTime = new Date(startTime);
    } else if (typeof startTime === 'string') {
      this.startTime = new Date(startTime);
    } else {
      throw new Error('startTime doit être une Date, un timestamp ou une string ISO');
    }
  }

  /**
   * Retourne le delta temps entre startTime et maintenant
   * Positif si startTime est dans le futur, négatif si dans le passé
   * @param {Date|number|string} [currentTime] - L'heure actuelle (par défaut maintenant)
   * @returns {number} Le delta temps en millisecondes
   */
  getTimeDelta(currentTime = new Date()) {
    let now;
    
    if (currentTime instanceof Date) {
      now = currentTime;
    } else if (typeof currentTime === 'number') {
      now = new Date(currentTime);
    } else if (typeof currentTime === 'string') {
      now = new Date(currentTime);
    } else {
      throw new Error('currentTime doit être une Date, un timestamp ou une string ISO');
    }

    return this.startTime.getTime() - now.getTime();
  }

  /**
   * Retourne le delta temps en secondes
   * Positif si startTime est dans le futur, négatif si dans le passé
   * @param {Date|number|string} [currentTime] - L'heure actuelle (par défaut maintenant)
   * @returns {number} Le delta temps en secondes
   */
  getTimeDeltaInSeconds(currentTime = new Date()) {
    return Math.ceil(this.getTimeDelta(currentTime) / 1000);
  }

  /**
   * Retourne le delta temps en minutes
   * Positif si startTime est dans le futur, négatif si dans le passé
   * @param {Date|number|string} [currentTime] - L'heure actuelle (par défaut maintenant)
   * @returns {number} Le delta temps en minutes
   */
  getTimeDeltaInMinutes(currentTime = new Date()) {
    return Math.floor(this.getTimeDelta(currentTime) / (1000 * 60));
  }

  /**
   * Retourne le delta temps en heures
   * Positif si startTime est dans le futur, négatif si dans le passé
   * @param {Date|number|string} [currentTime] - L'heure actuelle (par défaut maintenant)
   * @returns {number} Le delta temps en heures
   */
  getTimeDeltaInHours(currentTime = new Date()) {
    return Math.floor(this.getTimeDelta(currentTime) / (1000 * 60 * 60));
  }

  /**
   * Retourne l'heure de départ
   */
  get start() {
    return this.startTime;
  }
}
