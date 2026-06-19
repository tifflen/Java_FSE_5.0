import java.util.concurrent.CountDownLatch;

public class SingletonTest {
    public static void main(String[] args) throws InterruptedException {
        Logger logger1 = Logger.getInstance();
        Logger logger2 = Logger.getInstance();

        if (logger1 != logger2) {
            throw new AssertionError("Expected Logger to return the same instance");
        }

        // Extra: stress test with multiple threads
        int threads = 10;
        CountDownLatch latch = new CountDownLatch(threads);
        Logger[] results = new Logger[threads];

        for (int i = 0; i < threads; i++) {
            final int idx = i;
            Thread t = new Thread(() -> {
                results[idx] = Logger.getInstance();
                latch.countDown();
            });
            t.start();
        }

        latch.await();

        for (int i = 1; i < threads; i++) {
            if (results[i] != results[0]) {
                throw new AssertionError("Expected same Logger instance across threads");
            }
        }

        logger1.log("Singleton works: only one instance is used.");
        System.out.println("Test passed. logger1 == logger2 == all threads result.");
    }
}

