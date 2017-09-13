class GuessingGame {
    constructor() {
        this.min = 0;
     	this.max = 0;
        this.mid = 0;
	}

    setRange(min, max) {
    	this.min = min;
    	this.max = max;
    }

    guess() {
    	return this.mid = Math.ceil(this.min + (this.max - this.min)/2);
    }

    lower() {
    	this.setRange(this.min, this.mid);
    }

    greater() {
    	this.setRange(this.mid, this.max);
    }
}

module.exports = GuessingGame;
