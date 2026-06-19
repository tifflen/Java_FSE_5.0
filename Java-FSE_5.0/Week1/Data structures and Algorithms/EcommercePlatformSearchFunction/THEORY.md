# Theory: Search in an E-commerce Platform (Big-O + Solutions)

## 1) Asymptotic Notation: Big O
Big O notation describes how the running time (or space) of an algorithm grows as the input size **n** increases.
It ignores constants and lower-order terms so we can compare scalability.

### Why it matters for e-commerce search
As the number of products grows, you want search to scale efficiently (for example, if you double the catalog size, how much slower does search get?).

## 2) Best / Average / Worst case (Search operations)
Assume searching for a target inside a list of **n** products.

## 3) Linear Search (solution)
### Approach
Check each product one-by-one until you find the target.
- Works on **unsorted** arrays.

### Time complexity
- **Best case:** `O(1)` (target is at the first position)
- **Average case:** `O(n)` (target is somewhere in the list)
- **Worst case:** `O(n)` (target not found or last position)

## 4) Binary Search (solution)
### Prerequisite
Binary search requires the array to be **sorted** (commonly by `productId`).

### Approach
Repeatedly split the search range in half and compare with the middle element.

### Time complexity
- **Best case:** `O(1)` (target is at the middle element)
- **Average case:** `O(log n)`
- **Worst case:** `O(log n)` (target not present; range keeps halving until empty)

## 5) Compare Linear vs Binary (analysis)
### Complexity summary
- Linear: `O(1)` best, `O(n)` average/worst
- Binary: `O(1)` best, `O(log n)` average/worst

### Which is more suitable?
- **Binary search** is better for large catalogs where you can keep products sorted by a key (e.g., `productId`). It provides much faster lookups (`log n`).
- **Linear search** is simpler and can be fine for small lists, rarely-used searches, or when sorting/maintaining sorted order is costly.

## 6) Practical note (why real systems go beyond these)
In production e-commerce platforms, you often use indexing/data structures:
- `HashMap` for average `O(1)` lookups by key
- Database indexes / search engines for complex queries (name, category, relevance ranking)

But for learning and controlled datasets:
- linear search demonstrates correctness without sorting
- binary search demonstrates efficiency with sorting

