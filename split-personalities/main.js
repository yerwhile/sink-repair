const originalDisorderFormat =
  'Depression|$|Bipolar|$|Manic|$|Anxiety|$|Anorexia|$|Posttraumtic Stress|$|Seasonal Affective|$|Bulimia'

  splitDisorderFormat = originalDisorderFormat.split('|$|');

divItems = splitDisorderFormat.join('</div>\n<div>');

console.log(`<div>${divItems}</div>`);

  