-- MySQL dump 10.13  Distrib 5.7.24, for Linux (x86_64)
--
-- Host: localhost    Database: slugger_development
-- ------------------------------------------------------
-- Server version	5.7.24-0ubuntu0.18.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `slugger`
--

DROP TABLE IF EXISTS `slugger`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `slugger` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `slug` varchar(12) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `url` varchar(2048) NOT NULL,
  `custom` tinyint(1) DEFAULT '0',
  `timestamp` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `slug` (`slug`),
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `slugger`
--

LOCK TABLES `slugger` WRITE;
/*!40000 ALTER TABLE `slugger` DISABLE KEYS */;
INSERT INTO `slugger` VALUES (1,'w$qe92Ejg','https://www.google.com',0,'2018-11-16 05:59:08'),(2,'qV50y0gZk','https://www.reddit.com',0,'2018-11-16 05:59:42'),(3,'CUSTOM1','https://www.reddit.com',1,'2018-11-16 06:00:02'),(5,'CUSTOM2','https://www.reddit.com',1,'2018-11-16 06:00:08'),(6,'CUSTOM3','https://www.reddit.com',1,'2018-11-16 06:00:12'),(7,'CUSTOM4','https://www.reddit.com',1,'2018-11-16 06:00:16'),(8,'CUSTOM5','https://www.reddit.com',1,'2018-11-16 06:00:19'),(9,'UKPxQDDNW','https://www.twitter.com',0,'2018-11-16 06:00:31'),(10,'Whickfomc','https://www.instagram.com',0,'2018-11-16 10:57:47'),(11,'CUSTOM6','https://www.instagram.com',1,'2018-11-16 10:59:13'),(13,'custom1','https://www.instagram.com',1,'2018-11-16 11:46:26');
/*!40000 ALTER TABLE `slugger` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `visit`
--

DROP TABLE IF EXISTS `visit`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `visit` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `slug_id` int(11) NOT NULL,
  `ipv4` varchar(15) NOT NULL,
  `timestamp` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `visit_fk0` (`slug_id`),
  CONSTRAINT `visit_fk0` FOREIGN KEY (`slug_id`) REFERENCES `slugger` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `visit`
--

LOCK TABLES `visit` WRITE;
/*!40000 ALTER TABLE `visit` DISABLE KEYS */;
INSERT INTO `visit` VALUES (1,1,'172.30.0.213','2018-11-16 10:57:15'),(2,1,'172.30.0.213','2018-11-16 11:06:15'),(3,3,'172.30.0.213','2018-11-16 11:09:49'),(4,3,'172.30.0.213','2018-11-16 11:10:40'),(5,3,'172.30.0.213','2018-11-16 11:10:51'),(6,11,'172.30.0.213','2018-11-16 11:14:35'),(7,11,'172.30.0.213','2018-11-16 11:15:32'),(8,11,'172.30.0.213','2018-11-16 11:20:10'),(9,11,'172.30.0.213','2018-11-16 11:20:14'),(10,11,'172.30.0.213','2018-11-16 11:20:17'),(11,11,'172.30.0.213','2018-11-16 11:24:48'),(12,3,'172.30.0.213','2018-11-16 11:31:47'),(13,3,'172.30.0.213','2018-11-16 11:31:54'),(14,3,'172.30.0.213','2018-11-16 11:34:52'),(15,3,'172.30.0.213','2018-11-16 11:35:21'),(16,3,'172.30.0.213','2018-11-16 11:37:46');
/*!40000 ALTER TABLE `visit` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-11-16 11:48:44
