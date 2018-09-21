class Sorters {
    static byName(a, b) {
        var nameA = a.name.toUpperCase(); // ignore upper and lowercase
        var nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
      
        // names must be equal
        return 0;
    }
    
    static byWeight(a, b) {
        let weight = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
        if (a[weight] < b[weight]) {
          return -1;
        }
        if (a[weight] > b[weight]) {
          return 1;
        }
      
        // names must be equal
        return 0
    }
}
export default Sorters