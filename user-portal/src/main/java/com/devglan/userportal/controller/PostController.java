package com.devglan.userportal.controller;

import com.devglan.userportal.model.Post;
import com.devglan.userportal.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping({"/posts"})
public class PostController {

    @Autowired
    private PostService postService;

    @PostMapping
    public Post create(@RequestBody Post post){
        return postService.create(post);
    }

    @GetMapping(path = {"/{id}"})
    public Post findOne(@PathVariable("id") int id){
        return postService.findById(id);
    }

    @PutMapping
    public Post update(@RequestBody Post post){
        return postService.update(post);
    }

    @DeleteMapping(path ={"/{id}"})
    public Post delete(@PathVariable("id") int id) {
        return postService.delete(id);
    }

    @GetMapping
    public List<Post> findAll(){
        return postService.findAll();
    }
}
