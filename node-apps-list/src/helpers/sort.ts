module.exports = {
    sortSubscriptions(apps: Array<any>): Array<any> {
        return apps.sort((a, b) => {
            if (getPlansPrice(a.subscriptions) < getPlansPrice(b.subscriptions)) {
                return 1;
            } else if (getPlansPrice(a.subscriptions) > getPlansPrice(b.subscriptions)) {
                return -1;
            }
            return 0;
        });
    }
}

function getPlansPrice(subscriptions: Array<{name: string, price: number}>): number {
    return subscriptions.reduce((sum, cur) => sum + cur.price, 0);
}