<?php
namespace Library;

require_once __DIR__ . '/../Traits/AddressFormatter.php';
use Traits\AddressFormatter;

class Book {
    use AddressFormatter;

    private $title;
    private $author;

    public function __construct($title, $author) {
        $this->title = $title;
        $this->author = $author;
    }

    public function getDetails() {
        return "{$this->title} by {$this->author}";
    }
}
