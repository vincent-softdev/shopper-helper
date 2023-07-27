import 'dart:io';
import 'package:flutter/foundation.dart';
import 'package:http/http.dart' as http;

abstract class ImageUploader {
  Future<void> uploadImage(File? image);
}

class ServerImageUploader implements ImageUploader {
  @override
  Future<void> uploadImage(File? image) async {
    var request = http.MultipartRequest('POST', Uri.parse('http://localhost:8000/image/upload'))
      ..files.add(await http.MultipartFile.fromPath('image', image!.path));
    var response = await request.send();
    if(kDebugMode){
      if (response.statusCode == 200) {
        print('Image uploaded!');
      } else {
        print('Image not uploaded.');
      }
    }
  }
}