-- . Find the name and rating of the top rated apps in each category, 
-- among apps that have been installed at least 50,000 times.
SELECT app_name, rating, category FROM analytics
  WHERE (rating, category) in (
    SELECT MAX(rating), category FROM analytics
      WHERE min_installs >= 50000
      GROUP BY category
    )
  ORDER BY category;

-- 2. Find all the apps that have a name similar to "facebook".
SELECT * FROM analytics 
  WHERE app_name ILIKE '%facebook%';

-- 3. Find all the apps that have more than 1 genre.
SELECT * FROM analytics 
  WHERE  array_length(genres, 1) = 2;

-- 4. Find all the apps that have education as one of their genres.
SELECT * FROM analytics 
  WHERE genres @> '{"Education"}';