import 'dart:io';
import 'package:image_picker/image_picker.dart';

// Model
abstract class ImageProvider {
  Future<File?> getImage();
}

class CameraImageProvider implements ImageProvider {
  final picker = ImagePicker();

  @override
  Future<File?> getImage() async {
    final pickedFile = await picker.pickImage(source: ImageSource.camera);

    if (pickedFile != null) {
      return File(pickedFile.path);
    } else {
      print('No image selected.');
      return null;
    }
  }
}