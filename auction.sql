-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 13, 2022 at 07:43 PM
-- Server version: 10.4.20-MariaDB
-- PHP Version: 8.0.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `auction`
--

-- --------------------------------------------------------

--
-- Table structure for table `auction`
--

CREATE TABLE `auction` (
  `auction_id` int(11) NOT NULL,
  `auction_title` varchar(100) NOT NULL,
  `auction_time` time NOT NULL,
  `auction_start_date` date NOT NULL,
  `auction_description` varchar(255) NOT NULL,
  `auction_status` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `auction`
--

INSERT INTO `auction` (`auction_id`, `auction_title`, `auction_time`, `auction_start_date`, `auction_description`, `auction_status`) VALUES
(15, 'One', '08:56:00', '2019-12-30', 'Description', 0),
(17, 'edit done', '23:00:00', '1980-09-14', 'Odit esse aut est i', 1),
(18, 'test', '02:02:00', '2019-12-28', 'tksjndkjasnjd', 1),
(19, 'Repellendus Quis qu', '14:46:43', '1999-06-24', 'Eiusmod odit molesti', 1),
(20, 'Adipisci pariatur D', '04:06:00', '2016-09-09', 'Optio sed fugiat d', 1),
(22, 'Aut ex rerum invento', '04:50:00', '2022-01-15', 'Nobis commodo aut eu', 1);

-- --------------------------------------------------------

--
-- Table structure for table `auction_category`
--

CREATE TABLE `auction_category` (
  `auction_category_id` int(11) NOT NULL,
  `category_name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `auction_category`
--

INSERT INTO `auction_category` (`auction_category_id`, `category_name`) VALUES
(1, 'Painting'),
(2, 'Carving'),
(3, 'Drawing'),
(4, 'Sculpture'),
(5, 'Photographic Images');

-- --------------------------------------------------------

--
-- Table structure for table `auction_item`
--

CREATE TABLE `auction_item` (
  `auction_item_lot_number` int(8) NOT NULL,
  `seller_id` int(11) NOT NULL,
  `artist_name` varchar(80) NOT NULL,
  `produced_date` date NOT NULL,
  `classification` varchar(50) NOT NULL,
  `description` varchar(255) NOT NULL,
  `auction` int(11) NOT NULL,
  `item_price` int(15) NOT NULL,
  `image_url` varchar(255) NOT NULL,
  `auction_category` int(11) NOT NULL,
  `item_medium` varchar(30) DEFAULT NULL,
  `framed` tinyint(1) DEFAULT NULL,
  `image_type` varchar(30) DEFAULT NULL,
  `item_material_used` varchar(50) DEFAULT NULL,
  `item_height` int(10) NOT NULL,
  `item_width` int(10) DEFAULT NULL,
  `item_length` int(10) NOT NULL,
  `item_weight` int(10) DEFAULT NULL,
  `item_sold` tinyint(1) DEFAULT NULL,
  `item_status` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `auction_item`
--

INSERT INTO `auction_item` (`auction_item_lot_number`, `seller_id`, `artist_name`, `produced_date`, `classification`, `description`, `auction`, `item_price`, `image_url`, `auction_category`, `item_medium`, `framed`, `image_type`, `item_material_used`, `item_height`, `item_width`, `item_length`, `item_weight`, `item_sold`, `item_status`) VALUES
(4, 51, 'Deep', '2020-01-01', 'Non odio repudiandae nobis consequatur aut hic. Ut', 'testsss', 17, 40000, '', 5, NULL, NULL, 'Incidunt placeat omnis ut qui ', NULL, 12, NULL, 12, NULL, 0, 1),
(5, 51, 'Deep', '2021-01-01', 'omnis voluptatem aliquid', 'test', 17, 60000, '', 5, NULL, NULL, 'Provident accusantium similiqu', NULL, 12, NULL, 12, NULL, 0, 1),
(6, 52, 'Hilda Padilla', '1976-12-17', 'Qui consequatur fac', 'this is my description', 19, 97, '', 1, 'resr', 0, 'Illum dolorem repre', 'test', 68, 0, 25, 0, 0, 1),
(8, 52, 'Zephania Wallace', '2016-12-22', 'Eos aut Nam exercita', 'Omnis exercitationem', 18, 23, '', 1, 'Et veniam lorem est', 1, '', '', 33, 0, 59, 0, 0, 1),
(9, 52, 'Desirae Petty', '2015-02-21', 'Quam dicta aliqua I', 'Nisi eveniet volupt', 20, 31, '', 3, 'tessda', 1, '', '', 2, 0, 43, 0, 0, 1),
(10, 52, 'Colin Emersonless', '2014-06-08', 'Repudiandae eveniet', 'Non ut culpa possim', 19, 12, '', 1, 'dssdf', 1, '', '', 82, 0, 83, 0, NULL, 1),
(11, 52, 'Dexter Sexton', '1995-10-13', 'Officia expedita ', 'Maiores ut id debiti', 15, 64, '', 2, '', 0, '', 'dsa', 21, 321, 80, 42, NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `bid`
--

CREATE TABLE `bid` (
  `bid_id` int(11) NOT NULL,
  `bidder` int(11) NOT NULL,
  `bid_item` int(11) NOT NULL,
  `bid_seller` int(11) NOT NULL,
  `bid_price` int(11) NOT NULL,
  `bid_time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `bid`
--

INSERT INTO `bid` (`bid_id`, `bidder`, `bid_item`, `bid_seller`, `bid_price`, `bid_time`) VALUES
(1, 51, 4, 51, 24242, '0000-00-00 00:00:00'),
(2, 51, 5, 51, 500000, '0000-00-00 00:00:00'),
(3, 79, 8, 52, 4, '0000-00-00 00:00:00'),
(4, 51, 11, 52, 30042, '0000-00-00 00:00:00'),
(5, 51, 8, 52, 24, '0000-00-00 00:00:00'),
(6, 51, 6, 52, 100, '0000-00-00 00:00:00'),
(12, 52, 5, 51, 123, '2022-01-12 06:59:53'),
(13, 52, 9, 52, 324, '2022-01-12 07:06:26');

-- --------------------------------------------------------

--
-- Table structure for table `role`
--

CREATE TABLE `role` (
  `role_id` int(11) NOT NULL,
  `role_title` varchar(30) NOT NULL,
  `role_description` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `role`
--

INSERT INTO `role` (`role_id`, `role_title`, `role_description`) VALUES
(1, 'Admin', 'Admin is allowed to handle all biddings, items and auctions including all types of users.'),
(2, 'Buyer', 'Buyer is allowed to bid on different types of auction items and participate on auctions.'),
(5, 'Seller', 'Seller is allowed to place items on auctions with specifiedn details and price.'),
(7, 'Joint', 'THis type of account have feature of both buyer and seller account');

-- --------------------------------------------------------

--
-- Table structure for table `sale`
--

CREATE TABLE `sale` (
  `sale_id` int(11) NOT NULL,
  `winning_bidder` int(11) NOT NULL,
  `commission` int(50) NOT NULL,
  `item_id` int(11) NOT NULL,
  `sale_price` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `first_name` varchar(30) NOT NULL,
  `last_name` varchar(30) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(20) NOT NULL,
  `confirmation_password` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `contact` varchar(15) NOT NULL,
  `bank_account_number` varchar(20) NOT NULL,
  `bank_sort_code` int(6) NOT NULL,
  `status` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `first_name`, `last_name`, `email`, `password`, `confirmation_password`, `token`, `contact`, `bank_account_number`, `bank_sort_code`, `status`) VALUES
(51, 'Kaylie', 'Grimes', 'Norberto.Dare59@yahoo.com', '$2a$13$RQsLUnt4AnI1f', '$2a$13$RQsLUnt4AnI1f8CqVt/.S.H2jOcTtd7donZ1e.cSzBd9Pj6TRt2ge', '', '885-581-4493', '', 0, 1),
(52, 'Astrid', 'Heaney', 'Giovanni_Osinski@gmail.com', '$2a$13$L3j0/cAc5aqSb', '$2a$13$L3j0/cAc5aqSbM7CEsRhTuuoPvAl/Oamn.erhrq7/YwYfCGpgcfDy', '', '504-559-8671', '', 0, 1),
(53, 'Admin', 'User', 'TestUser@gmail.com', '$2a$13$1uXqFeu6ipDlT', '$2a$13$1uXqFeu6ipDlT41jM6SwN.CvgbyGySQFY86a20G2FDMX9lco3ZsQe', '', '31423', '4343353532411', 3234, 1),
(54, 'Katelin', 'Baumbach', 'Ulises.Koch92@hotmail.com', '$2a$13$RbfvjmsPMeiJ6', '$2a$13$RbfvjmsPMeiJ6BQk7kkbH.HJOeW6sngaYmDypPHh9nYo5LjFmha6G', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IlVsaXNlcy5Lb2NoOTJAaG90bWFpbC5jb20iLCJpYXQiOjE2NDE3MzI4ODMsImV4cCI6MTY0MTc0MzY4M30.RmJNbPbgZSSsMHnQmRfsxkEzxq_FKHpfi1gNhT0xw5I', '281-696-7401', '', 0, 0),
(74, 'Fname', 'Nihil architecto mag', 'retijiqe@mailinator.com', '$2a$13$i1cjdE9ScsZWj', '$2a$13$i1cjdE9ScsZWjp0xftNc9e587BDCIa4nnhUs38j/M3oimFl9nR0qW', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJldGlqaXFlQG1haWxpbmF0b3IuY29tIiwiaWF0IjoxNjQwNzAyODY5LCJleHAiOjE2NDA3MTAwNjl9.RSZjrb8J0PLO1WtydCPbBHQ7_5YHPwZ06uIzZZ58M5E', '41', '42423434', 312131, 0),
(75, 'Laudantium animi v', 'Eaque enim mollitia ', 'kilevo@mailinator.com', '$2a$13$kU5oBY0d6o8IW', '$2a$13$kU5oBY0d6o8IWfOFk3o3reCYN1iedOt.0iK.eMbt14nuRHxtaDQIS', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImtpbGV2b0BtYWlsaW5hdG9yLmNvbSIsImlhdCI6MTY0MDcwMjkyMSwiZXhwIjoxNjQwNzEwMTIxfQ.2BUX1m1sWtd-_YEObG13jQ4jd0AsH560FO82ZoF-4p8', '67', '', 0, 0),
(79, 'Ole', 'Quis aliquip dolore ', 'bisitewyge@mailinator.com', '$2a$13$wM/qBRL/jhCW.', '$2a$13$wM/qBRL/jhCW.nU7z3bAH.WStMq6ArxrCd1x6DBTdgkji.KwfGl9G', '', '41', '', 0, 0),
(81, 'Est officia praesen', 'Corrupti deserunt m', 'nyqu@mailinator.com', '$2a$13$31RJlu.gs2TJx', '$2a$13$31RJlu.gs2TJxrtsRvvX9OY6blWQ5IsiM0j7btWO4EsVE4W13Ou5O', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im55cXVAbWFpbGluYXRvci5jb20iLCJpYXQiOjE2NDA4NzMzNDksImV4cCI6MTY0MDg4MDU0OX0.BoZ3aU--16CpB_Q2y2qjsV9bPcG9OmfoHhM0SJwtVUI', '79', '', 0, 1),
(82, 'Neque dolor in fugit', 'Cupiditate laboris e', 'kugehyqew@mailinator.com', '$2a$13$ag/Mc7T/v6iva', '$2a$13$ag/Mc7T/v6ivaJeCG7EQSusc3Dw6vQDc3M/FgjRQtnfS1gqEryCU.', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imt1Z2VoeXFld0BtYWlsaW5hdG9yLmNvbSIsImlhdCI6MTY0MTE4OTcxMSwiZXhwIjoxNjQxMjAwNTExfQ.zkXKlZWqHsN04goxVuBupjuxtkPJkU-Ejn_plyOo8q4', '88', '', 0, 1),
(84, 'Ullam sunt quae cons', 'Non amet excepteur ', 'johaz@mailinator.com', '$2a$13$x.FZ90830OVOc', '$2a$13$x.FZ90830OVOceT6qJj8pOEv9NVfCKF/Au5uDSB7aky4SGBcZMJV2', '', '9', '72', 65, 0),
(85, 'Max', 'Fotheby', 'admin@gmail.com', '$2a$13$JmIsWBrpr3Z54', '$2a$13$JmIsWBrpr3Z54RTaZGesyOnyJbgsK1lhnFOm1wkM6Rvs.oc7Umr/G', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImlhdCI6MTY0MjA5MjU4NCwiZXhwIjoxNjQyMTAzMzg0fQ.AZA3dFs_QAZIidT-4GZCROO7vlj1WiamaUOXSTvlBmc', '8779273718', '2638193748029384', 253641, 1),
(86, 'Possimus dolores ma', 'Quo quos eum exercit', 'kecaxo@mailinator.com', '$2a$13$Lqcof/FnNvMwo', '$2a$13$Lqcof/FnNvMwobplTx1KiOvTYol4fYwNhBsRxtj1.ARGiWZBqnbHW', '', '75', '24', 51, 1);

-- --------------------------------------------------------

--
-- Table structure for table `user_roles`
--

CREATE TABLE `user_roles` (
  `user_role_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `role_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user_roles`
--

INSERT INTO `user_roles` (`user_role_id`, `user_id`, `role_id`) VALUES
(1, 51, 2),
(7, 52, 5),
(9, 74, 2),
(10, 75, 5),
(14, 54, 1),
(16, 79, 2),
(18, 81, 2),
(19, 82, 2),
(23, 84, 7),
(27, 85, 1),
(30, 86, 7);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `auction`
--
ALTER TABLE `auction`
  ADD PRIMARY KEY (`auction_id`);

--
-- Indexes for table `auction_category`
--
ALTER TABLE `auction_category`
  ADD PRIMARY KEY (`auction_category_id`);

--
-- Indexes for table `auction_item`
--
ALTER TABLE `auction_item`
  ADD PRIMARY KEY (`auction_item_lot_number`),
  ADD KEY `fk_auction_category` (`auction_category`),
  ADD KEY `fk_seller` (`seller_id`),
  ADD KEY `fk_auction_name` (`auction`);

--
-- Indexes for table `bid`
--
ALTER TABLE `bid`
  ADD PRIMARY KEY (`bid_id`),
  ADD KEY `fk_bid_item` (`bid_item`),
  ADD KEY `fk_bid_bidder` (`bidder`),
  ADD KEY `fk_bid_seller` (`bid_seller`);

--
-- Indexes for table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`role_id`);

--
-- Indexes for table `sale`
--
ALTER TABLE `sale`
  ADD PRIMARY KEY (`sale_id`),
  ADD KEY `fk_sale_bidder` (`winning_bidder`),
  ADD KEY `fk_sale_item` (`item_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `user_roles`
--
ALTER TABLE `user_roles`
  ADD PRIMARY KEY (`user_role_id`),
  ADD KEY `fk_user` (`user_id`),
  ADD KEY `fk_role` (`role_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `auction`
--
ALTER TABLE `auction`
  MODIFY `auction_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `auction_category`
--
ALTER TABLE `auction_category`
  MODIFY `auction_category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `auction_item`
--
ALTER TABLE `auction_item`
  MODIFY `auction_item_lot_number` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `bid`
--
ALTER TABLE `bid`
  MODIFY `bid_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `role`
--
ALTER TABLE `role`
  MODIFY `role_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `sale`
--
ALTER TABLE `sale`
  MODIFY `sale_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=90;

--
-- AUTO_INCREMENT for table `user_roles`
--
ALTER TABLE `user_roles`
  MODIFY `user_role_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `auction_item`
--
ALTER TABLE `auction_item`
  ADD CONSTRAINT `fk_auction_category` FOREIGN KEY (`auction_category`) REFERENCES `auction_category` (`auction_category_id`),
  ADD CONSTRAINT `fk_auction_name` FOREIGN KEY (`auction`) REFERENCES `auction` (`auction_id`),
  ADD CONSTRAINT `fk_seller` FOREIGN KEY (`seller_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `bid`
--
ALTER TABLE `bid`
  ADD CONSTRAINT `fk_bid_bidder` FOREIGN KEY (`bidder`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_bid_item` FOREIGN KEY (`bid_item`) REFERENCES `auction_item` (`auction_item_lot_number`),
  ADD CONSTRAINT `fk_bid_seller` FOREIGN KEY (`bid_seller`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `sale`
--
ALTER TABLE `sale`
  ADD CONSTRAINT `fk_sale_bidder` FOREIGN KEY (`winning_bidder`) REFERENCES `user` (`user_id`),
  ADD CONSTRAINT `fk_sale_item` FOREIGN KEY (`item_id`) REFERENCES `auction_item` (`auction_item_lot_number`);

--
-- Constraints for table `user_roles`
--
ALTER TABLE `user_roles`
  ADD CONSTRAINT `fk_role` FOREIGN KEY (`role_id`) REFERENCES `role` (`role_id`),
  ADD CONSTRAINT `fk_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
