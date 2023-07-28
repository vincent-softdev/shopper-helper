import 'dart:io';

import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:shopping_helper_app/models/models.dart' as models;

final imageProviderProvider = Provider<models.ImageProvider>((ref) => models.CameraImageProvider());
final imageUploaderProvider = Provider<models.ImageUploader>((ref) => models.ServerImageUploader());

class ImageExtractionPresenter extends ChangeNotifier {
  final models.ImageProvider imageProvider;
  final models.ImageUploader imageUploader;
  File? image;

  ImageExtractionPresenter(this.imageProvider, this.imageUploader, this.image);

  Future<void> getImage() async {
    image = await imageProvider.getImage();
    notifyListeners();
  }

  Future<void> uploadImage() async {
    if (image != null) {
      await imageUploader.uploadImage(image);
      image = null;
      notifyListeners();
    }
  }
}

final imageExtractionPresenterProvider = Provider.autoDispose.family<ImageExtractionPresenter, WidgetRef>((ref, widgetRef) => ImageExtractionPresenter(
  widgetRef.read(imageProviderProvider),
  widgetRef.read(imageUploaderProvider),
  null
));
