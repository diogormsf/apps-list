module.exports = {

    /**
     * Method that receives an array of apps and sorts them from
     * the biggest to lowest sum of the subscriptions plans price
     *
     * @param {Array<any>} apps
     * @returns {Array<any>}
     */
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

/**
 * Method that given an array of subscriptions returns the sum
 * of their prices
 *
 * @param {Array<{name: string, price: number}>} subscriptions
 * @returns {number}
 */
function getPlansPrice(subscriptions: Array<{ name: string, price: number }>): number {
    return subscriptions.reduce((sum, cur) => sum + cur.price, 0);
}