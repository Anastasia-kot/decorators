abstract class Beverage {
    description: string = "Unknown Beverage";

    public getDescription(): string {
        return this.description;
    }
    public abstract cost(): number;
}

abstract class CondimentDecorator extends Beverage {
    public abstract getDescription(): string;
}

class Espresso extends Beverage {

    public Espresso() {
        this.description = "Espresso";
    }

    public cost() {
        return 1.99;
    }
}

class Whip extends CondimentDecorator {
    beverage: Beverage;

    public Whip(beverage: Beverage) {
        this.beverage = beverage;
    }

    public cost() {
        return .20 + this.beverage.cost();
    }
}
