export class Place {
    constructor(
        public id: string,
        public title: string,
        public description: string,
        public imageUrl: string,
        public price: number,
        public location: string,
        public availableFrom: Date,
        public availableTo: Date,
        public userId: string
    ) { }
}
