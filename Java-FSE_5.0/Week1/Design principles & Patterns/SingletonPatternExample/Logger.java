public final class Logger {
    private static final Logger INSTANCE = new Logger();

    private Logger() {
        // private constructor to prevent direct instantiation
    }

    public static Logger getInstance() {
        return INSTANCE;
    }

    // helper for demonstrating usage
    public void log(String message) {
        System.out.println("[Logger] " + message);
    }
}

