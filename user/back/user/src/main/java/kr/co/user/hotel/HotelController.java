package kr.co.user.hotel;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

// 2025-02-15 황보도연 추가 
@RestController
@RequestMapping("/api/hotels")
public class HotelController {

    @Autowired
    private HotelRepository hotelRepository;

    @Autowired
    private HotelImageRepository hotelImageRepository;

    @GetMapping("")
    public List<Hotel> getAllHotels() {
        return hotelRepository.findAll();
    }

    @GetMapping("/{id}")
    public Hotel getHotelById(@PathVariable Long id) {
        return hotelRepository.findById(id).orElse(null);
    }

    @GetMapping("/location/{location}")
    public List<Hotel> getHotelsByLocation(@PathVariable String location) {
        return hotelRepository.findByLocation(location);
    }

    // @PostMapping("")
    // public Hotel createHotel(@RequestBody Hotel hotel) {
    // return hotelRepository.save(hotel);
    // }
    // @PutMapping("/{id}")
    // public ResponseEntity<Hotel> updateHotel(@PathVariable Long id, @RequestBody
    // Hotel hotel) {
    // return hotelRepository.findById(id)
    // .map(existingHotel -> {
    // existingHotel.setName(hotel.getName());
    // existingHotel.setRating(hotel.getRating());
    // existingHotel.setContent(hotel.getContent());
    // existingHotel.setLocation(hotel.getLocation());
    // existingHotel.setThumbnail(hotel.getThumbnail());
    // existingHotel.setHit(hotel.getHit());
    // existingHotel.setHdate(hotel.getHdate());
    // return new ResponseEntity<>(hotelRepository.save(existingHotel),
    // HttpStatus.OK);
    // })
    // .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    // }

    @DeleteMapping("/{id}")
    public void deleteHotel(@PathVariable Long id) {
        hotelRepository.deleteById(id);
    }

    @GetMapping("/{hotelNum}/images")
    public List<HotelImage> getHotelImages(@PathVariable Long hotelNum) {
        return hotelImageRepository.findByHotelNum(hotelNum);
    }

    // @PostMapping("/{hotelNum}/images")
    // public HotelImage addHotelImage(@PathVariable Long hotelNum, @RequestBody
    // HotelImage hotelImage) {
    // Hotel hotel = hotelRepository.findById(hotelNum).orElseThrow(() -> new
    // RuntimeException("Hotel not found")); //호텔 있는지 확인
    // hotelImage.setHotel(hotel);
    // return hotelImageRepository.save(hotelImage);
    // }
}
