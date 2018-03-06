package com.devglan.userportal.service;

import com.devglan.userportal.model.Post;
import com.devglan.userportal.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by Developer PC on 2/27/2018.
 */
@Service
public class PostServiceImpl implements PostService {

    @Autowired
    private PostRepository postRepository;


    @Override
    public List<Post> findAll() {
        return postRepository.findAll();
    }

    @Override
    public Post findById(int id) {
        return postRepository.findById(id);
    }

    @Override
    public Post create(Post post) {
        return postRepository.save(post);
    }

    @Override
    public Post update(Post post) {
        return null;
    }

    @Override
    public Post delete(int id) {
        Post post = findById(id);
        if(post != null){
            postRepository.delete(post);
        }
        return post;
    }
}
