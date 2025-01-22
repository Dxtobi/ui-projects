class LocalStorageORM {
    /**
     * @param {string} key
     */
    constructor(key) {
      this.key = key; // The key under which all items of this type are stored
    }
  
    // Generate a unique ID based on current timestamp
    generateId() {
      return Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
    }
  
    // Save or update an item
    /**
     * @param {{ id: string; }} item
     */
    save(item) {
      let items = this.getAll();
      
      // Generate an id if it doesn't exist
      if (!item.id) {
        item.id = this.generateId();
      }
  
      const index = items.findIndex((/** @type {{ id: any; }} */ i) => i.id === item.id);
      if (index > -1) {
        // Update existing item
        items[index] = {...items[index], ...item};
      } else {
        // Add new item
        items.push(item);
      }
      localStorage.setItem(this.key, JSON.stringify(items));
    }
  
    /**
     * @param {{ id: string; }} item
     */
    save_replace(item) {
      let items = this.getAll();
      item.id = this.generateId();
      items =[item];
      localStorage.setItem(this.key, JSON.stringify(items));
    }
    // Get one item by id
    /**
     * @param {any} id
     */
    getOne(id) {
      let items = this.getAll();
      return items.find((/** @type {{ id: any; }} */ item) => item.id === id) || null;
    }
  
    // Get all items
    getAll() {
        if (!this.key) return
         return JSON.parse(localStorage.getItem(this.key)) || [];
    }
  
    // Delete one item by id
    /**
     * @param {any} id
     */
    deleteOne(id) {
      let items = this.getAll();
      items = items.filter((/** @type {{ id: any; }} */ item) => item.id !== id);
      localStorage.setItem(this.key, JSON.stringify(items));
    }

    /**
     * @param {string | any[]} ids
     */
    deleteMany(ids) {
      let items = this.getAll();
      items = items.filter((/** @type {{ id: any; }} */ item) => !ids.includes(item.id));
      localStorage.setItem(this.key, JSON.stringify(items));
    }
  
    /**
     * @param {any} ids
     */
    clearAll(ids) {
      localStorage.removeItem(this.key);
    }
  }
  

  export const task_ldb = new LocalStorageORM('tasks');
  export const project_ldb = new LocalStorageORM('projects');
  export const user_ldb = new LocalStorageORM('user');


