import 'dart:io';

import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:shopping_helper_app/presenters/imageExtraction/image_extraction_presenter.dart';

class ImageExtraction extends ConsumerWidget {
  const ImageExtraction({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final presenter = ref.watch(imageExtractionPresenterProvider(ref));
    
    return Scaffold(
      appBar: AppBar(
        title: const Text('Image Extraction Screen'),
      ),
      body: Center(
        child: presenter.getImage() == null
            ? const Text('No image selected.')
            : Image.file(presenter.image as File),
      ),
      floatingActionButton: Row(
        mainAxisAlignment: MainAxisAlignment.end,
        children: [
          FloatingActionButton(
            onPressed: () => presenter.getImage(),
            tooltip: 'Pick Image',
            child: const Icon(Icons.add_a_photo),
          ),
          const SizedBox(
            width: 10,
          ),
          FloatingActionButton(
            onPressed: () => presenter.uploadImage(),
            tooltip: 'Upload Image',
            child: const Icon(Icons.upload_file),
          ),
        ],
      ),
    );
  }
}
