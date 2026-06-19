public class SearchTest {
    public static void main(String[] args) {
        Product[] unsorted = new Product[] {
                new Product(101, "Keyboard", "Electronics"),
                new Product(56, "Book", "Education"),
                new Product(209, "Mouse", "Electronics"),
                new Product(17, "Pen", "Stationery"),
                new Product(150, "Monitor", "Electronics")
        };

        // Must be sorted by productId for binary search
        Product[] sorted = new Product[] {
                new Product(17, "Pen", "Stationery"),
                new Product(56, "Book", "Education"),
                new Product(101, "Keyboard", "Electronics"),
                new Product(150, "Monitor", "Electronics"),
                new Product(209, "Mouse", "Electronics")
        };

        int target = 150;

        int linIndex = SearchAlgorithms.linearSearch(unsorted, target);
        System.out.println("Linear Search index for " + target + " = " + linIndex);
        if (linIndex != -1) {
            System.out.println("Found: " + unsorted[linIndex]);
        }

        int binIndex = SearchAlgorithms.binarySearch(sorted, target);
        System.out.println("Binary Search index for " + target + " = " + binIndex);
        if (binIndex != -1) {
            System.out.println("Found: " + sorted[binIndex]);
        }

        int notFound = 999;
        System.out.println("\nLinear Search (not found) index for " + notFound + " = " +
                SearchAlgorithms.linearSearch(unsorted, notFound));
        System.out.println("Binary Search (not found) index for " + notFound + " = " +
                SearchAlgorithms.binarySearch(sorted, notFound));
    }
}

