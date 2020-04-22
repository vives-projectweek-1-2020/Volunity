DROP TABLE IF EXISTS `order_list`;

CREATE TABLE `order_list` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `order_id` int(11) DEFAULT NULL,
  `brand` varchar(255) DEFAULT NULL,
  `item` varchar(255) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `maxprice` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

DROP TABLE IF EXISTS `orders`;

CREATE TABLE `orders` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id_order` int(11) DEFAULT NULL,
  `user_id_pickup` int(11) DEFAULT NULL,
  `completed` tinyint(1) DEFAULT NULL,
  `successful` tinyint(1) DEFAULT NULL,
  `min_price` smallint(6) DEFAULT NULL,
  `max_price` smallint(6) DEFAULT NULL,
  `store_location` varchar(255) DEFAULT NULL,
  `store_name` varchar(255) DEFAULT NULL,
  `start_time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `end_time` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstname` varchar(255) DEFAULT NULL,
  `email` varchar(320) DEFAULT NULL,
  `street` varchar(255) DEFAULT NULL,
  `number` smallint(6) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `postal_code` smallint(6) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `rating` int(1) DEFAULT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4;