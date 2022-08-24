import Model from './Model';

class DatasetWhatsappButton extends Model {
  number() {
    return this.get('number', '');
  }
  text() {
    return this.get('text');
  }
}

export default DatasetWhatsappButton;
