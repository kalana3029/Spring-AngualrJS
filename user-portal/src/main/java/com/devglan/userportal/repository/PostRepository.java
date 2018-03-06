package com.devglan.userportal.repository;

import com.devglan.userportal.model.Post;
import org.springframework.data.repository.Repository;

import java.util.List;

/**
 * Created by Developer PC on 2/27/2018.
 */
public interface PostRepository extends Repository<Post, Integer> {

    List<Post> findAll();
    Post findById(int id);
    Post save(Post post);
    void delete(Post post);

}
