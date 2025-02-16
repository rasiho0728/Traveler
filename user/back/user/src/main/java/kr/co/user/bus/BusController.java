package kr.co.user.bus;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/bus")
public class BusController {
    
    @Autowired
    private BusService busService;

    // @PostMapping
    // public Bus createBus(BusVO vo) throws IOException {

    // }


    @GetMapping()
    public Bus getBusByNum(@RequestParam("num") Long num) {
        return busService.getBusByNum(num);
    }
}
 