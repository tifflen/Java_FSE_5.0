package com.library.service;

import com.library.repository.BookRepository;

public class BookService {

    private BookRepository bookRepository;

    public BookService() {
        System.out.println("This is BookService");
    }

    public void setBookRepository(BookRepository bookRepository){
        this.bookRepository = bookRepository;
    }

    public void addBook(String name){
        bookRepository.saveBook(name);
    }
}
