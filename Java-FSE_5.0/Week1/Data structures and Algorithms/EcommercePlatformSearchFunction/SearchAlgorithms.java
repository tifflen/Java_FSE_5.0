public class SearchAlgorithms {

    // Linear search by productId over any (unsorted) array
    public static int linearSearch(Product[] products, int targetProductId) {
        for (int i = 0; i < products.length; i++) {
            if (products[i].getProductId() == targetProductId) {
                return i;
            }
        }
        return -1;
    }

    // Binary search by productId over a SORTED array (ascending by productId)
    public static int binarySearch(Product[] sortedProducts, int targetProductId) {
        int left = 0;
        int right = sortedProducts.length - 1;

        while (left <= right) {
            int mid = left + (right - left) / 2;
            int midVal = sortedProducts[mid].getProductId();

            if (midVal == targetProductId) {
                return mid;
            } else if (midVal < targetProductId) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return -1;
    }
}

