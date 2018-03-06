package com.devglan.userportal.service;

import com.devglan.userportal.model.Post;

import java.util.List;

/**
 * Created by Developer PC on 2/27/2018.
 */
public interface PostService {

    List<Post> findAll();
    Post findById(int id);
    Post create(Post post);
    Post update(Post post);
    Post delete(int id);
}
