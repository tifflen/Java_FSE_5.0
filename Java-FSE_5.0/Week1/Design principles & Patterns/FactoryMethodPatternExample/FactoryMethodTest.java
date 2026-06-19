public class FactoryMethodTest {
    public static void main(String[] args) {
        DocumentFactory[] factories = new DocumentFactory[] {
                new WordDocumentFactory(),
                new PdfDocumentFactory(),
                new ExcelDocumentFactory()
        };

        for (DocumentFactory factory : factories) {
            Document document = factory.createDocument();
            System.out.println("Created: " + document.getType());
            document.open();
            System.out.println();
        }

        System.out.println("Factory Method Pattern demo completed.");
    }
}

