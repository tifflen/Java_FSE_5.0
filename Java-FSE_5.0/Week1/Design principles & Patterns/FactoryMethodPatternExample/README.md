# FactoryMethodPatternExample

## Purpose
Demonstrates the **Factory Method Pattern** for a document management system.

## Files
- `Document.java` - document interface
- `WordDocument.java`, `PdfDocument.java`, `ExcelDocument.java` - concrete document types
- `DocumentFactory.java` - abstract factory (defines `createDocument()`)
- `WordDocumentFactory.java`, `PdfDocumentFactory.java`, `ExcelDocumentFactory.java` - concrete factories
- `FactoryMethodTest.java` - test/driver

## Compile & Run (no build tool required)
From the `FactoryMethodPatternExample` folder:

```bat
javac *.java
java FactoryMethodTest
```

