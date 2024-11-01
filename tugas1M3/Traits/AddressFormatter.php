<?php

namespace Traits;

trait AddressFormatter {
    public function formatAddress($city) {
        return "City: {$city}";
    }
}
