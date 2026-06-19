import java.util.Arrays;

/**
 * FinancialForecastingRecursive
 * --------------------------------
 * This demo shows how recursion can be used to forecast future values from past/known growth rates.
 *
 * Model used in this implementation
 * ---------------------------------
 * - You know the current value at year 0: baseValue = V[0]
 * - You also know growth rates for each transition:
 *     growthRates[i] = growth from year i to year i+1
 *   Example: growthRates.length == number of transitions you have/need for forecasting.
 * - Forecasting k years ahead means computing V[k].
 *
 * Naive recursive approach
 * -------------------------
 * V[t] depends on V[t-1] and growthRates[t-1]:
 *   V[t] = V[t-1] * (1 + growthRates[t-1])
 * We implement this dependency recursively.
 *
 * Time complexity (naive)
 * ------------------------
 * With this exact recurrence:
 *   V[t] = V[t-1] * (1 + growthRates[t-1])
 * each recursive call makes exactly one sub-call (t-1 -> t-2 -> ... -> 0).
 * Therefore:
 * - Time: O(k)
 * - Space (call stack): O(k)
 *
 * When does recursion become expensive?
 * ------------------------------------
 * Recursion becomes slow when a solution branches into multiple recursive calls that
 * repeatedly recompute the same subproblems. In such cases, the time can grow
 * exponentially (e.g., Fibonacci-style recursion).
 *
 * Optimization: memoization (top-down DP)
 * ---------------------------------------
 * To avoid recomputation, forecastRecursiveMemo caches computed V[t] values.
 * With caching:
 * - Time: O(k) because each t in [0..k] is computed once
 * - Space: O(k) for the memo array + O(k) call stack
 *
 * Bottom line:
 * - Naive recursion here is already O(k) (single sub-call recurrence).
 * - Memoization demonstrates the standard optimization pattern used when recursive branching
 *   would otherwise lead to excessive computation.
 */
public class FinancialForecastingRecursive {

    /**
     * Forecast future value k years ahead using naive recursion.
     *
     * @param baseValue    V[0]
     * @param growthRates  growthRates[i] applies from year i to i+1
     * @param k             number of years ahead to forecast (V[k])
     * @return forecasted value V[k]
     */
    public static double forecastRecursive(double baseValue, double[] growthRates, int k) {
        if (k < 0) throw new IllegalArgumentException("k must be >= 0");
        if (k == 0) return baseValue;
        if (k > growthRates.length)
            throw new IllegalArgumentException("Need growthRates length >= " + k + " (for transitions up to year " + k + ")");

        // V[k] = V[k-1] * (1 + growthRates[k-1])
        double prev = forecastRecursive(baseValue, growthRates, k - 1);
        return prev * (1.0 + growthRates[k - 1]);
    }

    /**
     * Forecast future value k years ahead using memoization (top-down DP).
     *
     * @param baseValue    V[0]
     * @param growthRates  growthRates[i] applies from year i to i+1
     * @param k             number of years ahead to forecast (V[k])
     * @return forecasted value V[k]
     */
    public static double forecastRecursiveMemo(double baseValue, double[] growthRates, int k) {
        if (k < 0) throw new IllegalArgumentException("k must be >= 0");
        if (k == 0) return baseValue;
        if (k > growthRates.length)
            throw new IllegalArgumentException("Need growthRates length >= " + k + " (for transitions up to year " + k + ")");

        // memo[t] stores V[t]. We'll use Double.NaN as "not computed".
        double[] memo = new double[k + 1];
        Arrays.fill(memo, Double.NaN);
        memo[0] = baseValue;

        return forecastRecursiveMemoHelper(growthRates, memo, k);
    }

    private static double forecastRecursiveMemoHelper(double[] growthRates, double[] memo, int t) {
        if (!Double.isNaN(memo[t])) return memo[t];

        // V[t] = V[t-1] * (1 + growthRates[t-1])
        double prev = forecastRecursiveMemoHelper(growthRates, memo, t - 1);
        memo[t] = prev * (1.0 + growthRates[t - 1]);
        return memo[t];
    }

    /**
     * Example usage.
     */
    public static void main(String[] args) {
        double baseValue = 100.0;

        // growthRates[i] applies from year i to year i+1
        // For example:
        // year 0 -> 1 growth = 5%
        // year 1 -> 2 growth = 3%
        // year 2 -> 3 growth = 4%
        double[] growthRates = {0.05, 0.03, 0.04};

        int k = 3; // forecast value at year 3

        double naive = forecastRecursive(baseValue, growthRates, k);
        double memo = forecastRecursiveMemo(baseValue, growthRates, k);

        System.out.println("Base Value (V0): " + baseValue);
        System.out.println("Growth Rates: " + Arrays.toString(growthRates));
        System.out.println("Forecast k=" + k + " years ahead");
        System.out.println("Naive recursive result: " + naive);
        System.out.println("Memoized recursive result: " + memo);
    }
}

