-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 03, 2023 at 12:24 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.0.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `kismat`
--

-- --------------------------------------------------------

--
-- Table structure for table `image`
--

CREATE TABLE `image` (
  `id` int(11) NOT NULL,
  `image` blob NOT NULL,
  `location` varchar(250) NOT NULL,
  `service` varchar(250) NOT NULL,
  `title` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `image`
--

INSERT INTO `image` (`id`, `image`, `location`, `service`, `title`) VALUES
(1, 0x363461636662323435336165335f696d616765732e6a7067, 'kannur', 'Car Modifications', 'Car Modifications'),
(4, 0x363461636666356536353939325f696d616765732e6a7067, 'idukki', 'Customer service', 'Customer service'),
(5, 0x363461643031336561323538325f31303031343633335f3731323330323132353435383935335f323636393930333030373038383133383335385f6e2e6a7067, 'eee', 'water service', 'title'),
(6, 0x363461643034393366303231375f646f776e6c6f61642e6a7067, 'eee', 'eee', 'ss'),
(7, 0x363462306531623534353034385f646f776e6c6f61642e6a7067, 'kannur', 'Customer service', 'Customer service'),
(8, 0x363462306532316632396538365f646f776e6c6f61642e6a7067, 'kannur', 'Customer service', 'Customer service'),
(9, 0x363462306532396564626661335f646f776e6c6f61642e6a7067, 'kannur', 'Customer service', 'Customer service'),
(10, 0x363462306532623962383165615f646f776e6c6f61642e6a7067, 'kannur', 'Customer service', 'Customer service'),
(11, 0x363462313036363536623231335f646f776e6c6f6164202831292e6a7067, 'eee', 'eee', 'eee'),
(12, 0x62616e6e6572312e706e67, 'kozhikode', 'car service', 'wer'),
(13, 0x62616e6e6572312e706e67, 'kannur', 'car service', 'ddd');

-- --------------------------------------------------------

--
-- Table structure for table `image1`
--

CREATE TABLE `image1` (
  `id` int(11) NOT NULL,
  `image` varchar(250) NOT NULL,
  `location` varchar(250) NOT NULL,
  `service` varchar(250) NOT NULL,
  `title` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `image1`
--

INSERT INTO `image1` (`id`, `image`, `location`, `service`, `title`) VALUES
(1, 'IMG-4356-scaled.jpg', 'kannur', 'car service', 'ware'),
(2, 'DSC00744-01.jpeg', 'kannur', 'Car Modifications', 'Agency1'),
(3, 'wallet.jpg', 'kannur', 'Car Modifications', 'Agency 2');

-- --------------------------------------------------------

--
-- Table structure for table `location`
--

CREATE TABLE `location` (
  `id` int(11) NOT NULL,
  `location` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `image`
--
ALTER TABLE `image`
  ADD UNIQUE KEY `id` (`id`);

--
-- Indexes for table `image1`
--
ALTER TABLE `image1`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `location`
--
ALTER TABLE `location`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `image`
--
ALTER TABLE `image`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `image1`
--
ALTER TABLE `image1`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `location`
--
ALTER TABLE `location`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
