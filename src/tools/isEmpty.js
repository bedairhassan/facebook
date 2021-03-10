function isEmpty(map) { // checks on empty array or empty object or empty string
    for (var key in map) {
      if (map.hasOwnProperty(key)) {
        return false;
      }
    }
    return true;
  }

  export default isEmpty;