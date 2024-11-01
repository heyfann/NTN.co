<?php

require_once __DIR__ . '/School/Student.php';
require_once __DIR__ . '/Library/Book.php';

use School\Student;
use Library\Book;

// Membuat objek Student
$student = new Student("John Doe", 20);
echo $student->introduce() . "<br>";

// Membuat objek Book
$book = new Book("PHP Programming", "Jane Doe");
echo $book->getDetails() . "<br>";
echo $book->formatAddress("Malang");
