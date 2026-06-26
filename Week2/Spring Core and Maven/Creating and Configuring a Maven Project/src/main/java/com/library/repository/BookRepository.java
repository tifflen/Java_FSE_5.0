package com.library.repository;

public class BookRepository {
    public  BookRepository() {
        System.out.println("This is BookRepository");
    }

    public void saveBook(String name){
        System.out.println("Book Name is : " + name);
    }
}
