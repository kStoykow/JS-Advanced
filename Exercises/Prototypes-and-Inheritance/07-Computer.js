function createComputerHierarchy() {
    function Keyboard(manufacturer, responseTime) {
        this.manufacturer = manufacturer;
        this.responseTime = responseTime;
    }

    function Monitor(manufacturer, width, height) {
        this.manufacturer = manufacturer;
        this.width = width;
        this.height = height;
    }

    function Battery(manufacturer, expectedLife) {
        this.manufacturer = manufacturer;
        this.expectedLife = expectedLife;
    }

    function Computer(manufacturer, processorSpeed, ram, hardDiskSpace) {
        this.manufacturer = manufacturer;
        this.processorSpeed = processorSpeed;
        this.ram = ram;
        this.hardDiskSpace = hardDiskSpace;
        if (this.constructor === Computer) {
            throw new Error('Cannot instantie abstract class.');
        }
    }

    function Laptop(manufacturer, processorSpeed, ram, hardDiskSpace, weight, color, battery) {
        this.manufacturer = manufacturer
        this.processorSpeed = processorSpeed;
        this.ram = ram;
        this.hardDiskSpace = hardDiskSpace;
        this.weight = weight;
        this.color = color;
        this._battery = battery;

        if (battery instanceof Battery == false) {
            throw new TypeError('Invalid instance');
        }
        Object.defineProperty(this, 'battery', {
            get: function () {
                return this._battery;
            },
            set: function (instance) {
                if (instance instanceof Battery) {
                    this._battery = battery;
                } else {
                    throw new TypeError('Invalid instance');
                }
            }
        });
    }

    function Desktop(manufacturer, processorSpeed, ram, hardDiskSpace, keyboard, monitor) {
        this.manufacturer = manufacturer;
        this.processorSpeed = processorSpeed;
        this.ram = ram;
        this.hardDiskSpace = hardDiskSpace;
        this._keyboard = keyboard;
        this._monitor = monitor;
        if (this._keyboard instanceof Keyboard == false) {
            throw new TypeError('Invalid instance');
        }
        if (this._monitor instanceof Monitor == false) {
            throw new TypeError('Invalid instance');
        }

        Object.defineProperty(this, 'keyboard', {
            get: function () {
                return this._keyboard;
            },
            set: function (instance) {
                if (instance instanceof Keyboard) {
                    this._keyboard = instance;
                } else {
                    throw new TypeError('Invalid instance');
                }
            }
        });

        Object.defineProperty(this, 'monitor', {
            get: function () {
                return this._monitor;
            },
            set: function (instance) {
                if (instance instanceof Monitor) {
                    this._monitor = instance;
                } else {
                    throw new TypeError('Invalid instance');
                }
            }
        });
    }

    Object.setPrototypeOf(Laptop, Computer);
    Object.setPrototypeOf(Desktop, Computer);
    
    return {
        Battery,
        Keyboard,
        Monitor,
        Computer,
        Laptop,
        Desktop
    }
}

let classes = createComputerHierarchy();
let Computer = classes.Computer;
let Laptop = classes.Laptop;
let Desktop = classes.Desktop;
console.log(Object.getPrototypeOf(Desktop));
console.log(Object.getPrototypeOf(Laptop));